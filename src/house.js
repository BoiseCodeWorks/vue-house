import { icons } from './assets/house-components/icons'

const house = {
  rooms: [{
    name: 'Living Room',
    dimensions: {
      height: 15,
      width: 20
    },
    items: [{
      name: 'TV',
      icon: icons.tv,
      description: 'Today on channel 6'
    }, {
      name: 'Fan',
      icon: icons.fan,
      description: 'fan on'
    }, {
      name: 'Kirby G9000',
      icon: icons.vacuum,
      description: '$$$$$$$$$$$'
    }]
  }, {
    name: 'Master',
    dimensions: {
      height: 10,
      width: 10
    },
    items: [{
      name: 'TV',
      icon: icons.tv,
      description: 'It appears to be broken'
    }, {
      name: 'Fan',
      icon: icons.fan,
      description: 'fan on'
    }, {
      name: 'Bed',
      icon: icons.bed,
      description: 'ZzzzzzZzzz'
    }]
  }, {
    name: 'Master Bath',
    dimensions: {
      height: 10,
      width: 6
    },
    items: [{
      name: 'Fan',
      icon: icons.fan,
      description: 'Apparently there was no airconditioner in this house'
    }, {
      name: 'Toilet',
      icon: icons.toilet,
      description: 'ugh words there are no words for this monstrosity.... It must havea been T-bell.',
      canMove: false
    }]
  },{
    name: 'Kitchen',
    dimensions: {
      height: 10,
      width: 20
    },
    items: [{
      name: 'Samsung Super Cool',
      icon: icons.fridge,
      description: 'Gross everything has decayed'
    }, {
      name: 'Bosch Dishwasher',
      icon: icons.dishwasher,
      description: 'There is evidence of water damage.'
    },{
      name: 'A Simple Stove',
      icon: icons.stove,
      description: 'The glass has charred and a terrible smell is coming from here'
    },{
      name: 'Toaster',
      icon: icons.toaster,
      description: 'It\'s just a toaster'
    }]
  },{
    name: 'Office',
    dimensions: {
      height: 10,
      width: 10
    },
    items: [{
      name: 'Samsung Super Cool',
      icon: icons.tv,
      description: 'There is no signal'
    }, {
      name: 'Fan',
      icon: icons.fan,
      description: 'Off'
    },{
      name: '',
      icon: icons.washingMachine,
      description: 'Just a washing machine, I wonder how they dried their clothes?'
    },{
      name: 'Singer',
      icon: icons.sew,
      description: 'A pair of unfinished pants lies on the machine'
    }]
  }]
}

export default house
