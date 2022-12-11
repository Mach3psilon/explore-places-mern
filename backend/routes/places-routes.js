const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid; // {pid: 'p1'}
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    console.log('GET request in /places');
    console.log(place)
    if (place === undefined) {
        return res.status(404).json({message: 'Could not find a place for the provided id.'});
    }


    res.json(place); // => {place} => {place: place}

});

module.exports = router;