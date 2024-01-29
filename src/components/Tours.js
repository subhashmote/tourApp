import Card from './Card.js';

function Tours({ tours, removeTour }) {
    // Check if tours is not an array
    if (!Array.isArray(tours)) {
        console.error("Tours should be an array.");
        return null;  // or handle the error in a way that makes sense for your application
    }

    console.log("This is tours inside Tours component");
    console.log(tours);

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Subhash</h2>
            </div>
            <div className='cards'>
                {tours.map((tour) => (
                    <Card key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
