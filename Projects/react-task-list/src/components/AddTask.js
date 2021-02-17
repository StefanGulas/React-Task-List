
const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>ToDo</label>
                <input type='text' 
                placeholder='Todo eingeben'/>
            </div>
            <div className='form-control'>
                <label>Kategorie</label>
                <input type='text' 
                placeholder='Kategorie angeben'/>
            </div>
            <div className='form-control'>
                <label>Fällig</label>
                <input type='text' 
                placeholder='Datum angeben'/>
            </div>
            <div className='form-control'>
                <label>Erinnerung</label>
                <input type='text' 
                placeholder='Erinnerung einrichten'/>
            </div>
            <div className='form-control'>
                <label>Wiederholen</label>
                <input type='text' 
                placeholder='Wiederholung einstellen'/>
            </div>
            <div className='form-control form-control-check'>
                <label>Wichtig</label>
                <input type='checkbox'/>
            </div>
            <div color='white'>
                <intput type='submit' type='Save ToDo' 
                className='btn btn-block'
                />
            </div>

        </form>
    )
}

export default AddTask
