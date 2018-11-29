export default function () {

  this.namespace = '';

  this.passthrough('https://keycloak.daiad.dai.co.uk/auth/realms/master/protocol/openid-connect/token');

  this.get('/addresses/1', function () {
      let myResponse =
      {
        data: {
          type: "address",
          id: "1",
          attributes: {
            addressType: "B"
          }
        },
        meta: {
            listActions: {

              actionGroups: [{
                  groupName: "default",
                  groupActions: [{
                      actionId: "ACT-123",
                      defaultDisplayName: "Teleport Pallet to Earth",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "api/whatever/whenever/",
                      action: {
                        actionType: 'confirm',
                        titleMessage: "Teleport Pallet to Earth",
                        confirmationMessage: 'Are you sure you want to teleport the radium to earth?',
                      }
                    },
                    {
                      actionId: "ACT-121",
                      defaultDisplayName: "Flatten Warehouse",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "/Someday/Tomorrow/",
                      action: {
                        actionType: 'confirm',
                        titleMessage: "Flatten Warehouse",
                        confirmationMessage: 'Are you sure you want to Flatten the warehouse?',
                      }
                    }
                  ]
                },
                {
                  groupName: "secondary",
                  groupActions: [{
                      actionId: "ACT-123",
                      defaultDisplayName: "Transplant Plasma Rays",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "/whatever/whenever/"
                    },
                    {
                      actionId: "ACT-126",
                      defaultDisplayName: "Implode dynamic universe",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "/Someday/Tomorrow/"
                    }
                  ]
                }
              ]
            },
            viewActions: {

              actionGroups: [{
                  groupName: "default",
                  groupActions: [{
                      actionId: "ACT-123",
                      defaultDisplayName: "Teleport Pallet to Earth",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "api/whatever/whenever/",
                      action: {
                        actionType: 'confirm',
                        titleMessage: "Teleport Pallet to Earth",
                        confirmationMessage: 'Are you sure you want to teleport the radium to earth?',
                      }
                    },
                    {
                      actionId: "ACT-121",
                      defaultDisplayName: "Flatten Warehouse",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "/Someday/Tomorrow/",
                      action: {
                        actionType: 'confirm',
                        titleMessage: "Flatten Warehouse",
                        confirmationMessage: 'Are you sure you want to Flatten the warehouse?',
                      }
                    }
                  ]
                },
                {
                  groupName: "secondary",
                  groupActions: [{
                      actionId: "ACT-123",
                      defaultDisplayName: "Transplant Plasma Rays",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "/whatever/whenever/"
                    },
                    {
                      actionId: "ACT-126",
                      defaultDisplayName: "Implode dynamic universe",
                      sequence: 1,
                      disabled: false,
                      actionEndpoint: "/Someday/Tomorrow/"
                    }
                  ]
                }
              ]
            }
          }
      };
        return myResponse;
      });

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).

      Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:

      this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');

      http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
  }
