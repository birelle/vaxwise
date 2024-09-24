import { Select } from 'flowbite-react'
import React, {useState} from 'react'
import { MultiSelect } from 'primereact/multiselect'
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';


function RecordVaccination({open, onClose}) {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <>
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center  transition-colors ${open ? "visible bg-black/50" : "invisible"}`}>
                <div className='w-1/2 bg-white rounded-lg flex flex-col p-4 justify-evenly h-96'>
                    <div className="card flex justify-content-center">
                        <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                            filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem border border-gray-300" />
                    </div>
                    <div className="flex flex-wrap justify-content-center gap-3">
                        <div className="flex align-items-center">
                            <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                            <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                            <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                            <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                        </div>
                        <div className="flex align-items-center">
                            <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                            <label htmlFor="ingredient4" className="ml-2">Onion</label>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                    <Button label='Save' severity='primary' />
                    <Button label='Cancle' severity='seconday'  onClick={onClose}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecordVaccination
