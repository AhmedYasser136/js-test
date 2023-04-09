const { updateCar } = require('../../src/controllers/carController');

const it = require('ava').default;

it('should update an added car', (t) => {
    // car request body should look like
    // {
    //     title: String
    //     tags: String
    //     price: Number
    //     age: Number

    // }
    // implement your test in order to pass
    updateCar({}); // test this controller
});
