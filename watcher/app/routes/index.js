import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            'id': '198273912',
            'name': 'Florenas, The Master',
            'position': {
                'map': 'Great Hall',
                'x': '235',
                'y': '199'
            },
            'attributes': {
                'strength': 76,
                'agility': 44,
                'dexterity': 54,
                'cunning': 32,
                'vigor': 20
            },
            'skills': {
                'accrobatics': 12,
                'chemistry': 87
            },
            'inventory': [
                {'id': '123', 'name': 'Exploding Banana', 'quantity': '15', 'image': 'https://static.turbosquid.com/Preview/2014/07/09__04_27_35/3.jpge3b4dbe7-cb06-4987-984d-cf65e157792cSmall.jpg'}
            ]
        }    
    }
});
