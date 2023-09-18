// Install ajv library npm install ajv

const Ajv = require('ajv')

const ajv = new Ajv()

describe('Schema Validation',()=>{


    it('Schema Validation against response',()=>{
         cy.request({
            method: 'GET',
            url:'https://fakestoreapi.com/products'
         }).then(response => {
           const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "integer"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "integer"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  }
                ]
              }


         const validate = ajv.compile(schema)
         const isValid = validate(response.body)
         expect(isValid).to.be.true
            
        
         })

         
    })
})