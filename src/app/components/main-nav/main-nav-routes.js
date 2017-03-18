export const mainNavRoutes = {
  womens: {
    'name': 'Womens',
    'path': '/products/womens',
    'subNavs': [
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
      },
      // }, {
      //   column: [
      //     {
      //       'name': 'Active',
      //       'path': '/products/womens/active'
      //     }, {
      //       'name': 'Underwear',
      //       'path': '/products/womens/underwear'
      //     }
      //   ]
      // }, {
      {
        column: [
          {
            'name': 'Accessories',
            'path': '/products/womens/accessories'
          }, {
            'name': 'Outerwear',
            'path': '/products/womens/outerwear'
          }
        ]
      }
    ]
  },
  mens: {
    'name': 'Mens',
    'path': '/products/mens',
    'subNavs': [
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
            'path': '/products/mens/active'
          }
        ]
      }, {
        column: [
          {
            'name': 'Underwear',
            'path': '/products/mens/underwear'
          },
          {
            'name': 'Outerwear',
            'path': '/products/mens/outerwear'
          }
        ]
      }, {
        column: [
          {
            'name': 'Accessories',
            'path': '/products/mens/accessories'
          }
        ]
      }
    ]
  },
  about: {
    'name': 'About',
    'path': '/about',
  },
  contact: {
    'name': 'Contact',
    'path': '/contact',
  },
};
