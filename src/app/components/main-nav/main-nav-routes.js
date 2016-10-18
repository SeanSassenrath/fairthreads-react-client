export const mainNavRoutes = [
  {
    'name': 'Womens',
    'path': '/products/womens',
    'subNav': [
      {
        column: [
          {
            'name': 'Tops',
            'path': '/products/womens/tops'
          }, {
            'name': 'Bottoms',
            'path': '/products/womens/bottoms'
          }
        ]
      }, {
        column: [
          {
            'name': 'Dresses',
            'path': '/products/womens/dresses'
          },
          {
            'name': 'Shoes',
            'path': '/products/womens/shoes'
          }
        ]
      }, {
        column: [
          {
            'name': 'Athleisure',
            'path': '/products/womens/athleisure'
          }, {
            'name': 'Underwear',
            'path': '/products/womens/underwear'
          }
        ]
      }
    ]
  },
  {
    'name': 'Mens',
    'path': '/products/mens',
    'subNav': [
      {
        column: [
          {
            'name': 'Tops',
            'path': '/products/mens/tops'
          }, {
            'name': 'Bottoms',
            'path': '/products/mens/bottoms'
          }
        ]
      }, {
        column: [
          {
            'name': 'Shoes',
            'path': '/products/mens/shoes'
          },
          {
            'name': 'Active',
            'path': '/products/mens/athleisure'
          }
        ]
      }, {
        column: [
          {
            'name': 'Underwear',
            'path': '/products/mens/underwear'
          }
        ]
      }
    ]
  },
  {
    'name': 'About',
    'path': '/about',
  },
  {
    'name': 'Contact',
    'path': '/contact',
  },
  {
    'name': 'Blog',
    'path': '/blog',
  }
];
