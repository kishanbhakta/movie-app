import { useState } from 'react';

const MovieCreateForm = () => {

    const [form, setForm] = useState({
        name: 'Some Movie',
        description: 'Some Description'
    });

    // event passed by React to get value and name of input
    const handleChange = (event) => {
        // Access Debugger and remember to `//` when !USING
        //debugger
        // get input
        const target = event.target;
        // get name of input
        const name = target.name;
        // set state
        setForm({
            // destructure all previous values
            ...form,
            //set new values for each object
            [name]: target.value,
        });
    };
    
    const handleGenreChange = (event) => {
        //debugger
        // destructure { options } and store in options
        const { options } = event.target;
        const optionsLength = options.length;
        // Initialize value array to store captured input values to
        let value = [];
        // Iterate through selected genres and push to value array
        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }

        setForm({
            ...form,
            genre: value.toString()
        })
    };

    return (
        <>
            <form>
                <div className="form-group">
                    {/*Convert JS object or value to a JSON string*/}
                    {JSON.stringify(form)}
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        value={form.name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Lord of the Rings"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        value={form.description}
                        name="description"
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Somewhere in Middle-earth..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Rating</label>
                    <input
                        onChange={handleChange}
                        value={form.rating}
                        name="rating"
                        type="number"
                        max="5"
                        min="0"
                        className="form-control"
                        id="rating"
                        placeholder="3"/>
                    <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        onChange={handleChange}
                        value={form.image}
                        name="image"
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="http://....."/>
                </div>
                <div className="form-group">
                    <label htmlFor="cover">Cover</label>
                    <input
                        onChange={handleChange}
                        value={form.cover}
                        name="cover"
                        type="text"
                        className="form-control"
                        id="cover"
                        placeholder="http://......"/>
                </div>
                <div className="form-group">
                    <label htmlFor="longDesc">Long Description</label>
                    <textarea
                        onChange={handleChange}
                        value={form.longDesc}
                        name="longDesc"
                        className="form-control"
                        id="longDesc"
                        rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select
                        /*Register all clicks*/
                        onChange={handleGenreChange}
                        multiple
                        className="form-control"
                        id="genre">
                        <option>drama</option>
                        <option>music</option>
                        <option>adventure</option>
                        <option>historical</option>
                        <option>action</option>
                    </select>
                </div>
            </form>
        </>
    );
};

export default MovieCreateForm;
