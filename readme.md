# Products Catalog Server

This is a Express.js server with a product list. It provides an API to load products with photos.


## Technologies Used

- Node.js
- Express.js

## Getting Started

1. Let's fork repository.
2. Clone the repository: `git clone https://github.com/your-username/product-catalog-backend.git`
3. Navigate to the project directory: `cd product-catalog-backend`
4. Install the dependencies: `npm install`
5. Start the server: `npm start`

The server will be running on `http://localhost:3000`.

<br />

# API Endpoints


## GET /products

* Fetch all phones based on the `/products` endpoint.

* Example: `GET /products`



<details>
  <summary>Response body example <--Click Me</summary>

  ```json
    [
      {
        "id":"1",
        "category":"phones",
        "phoneId":"apple-iphone-7-32gb-black",
        "itemId":"apple-iphone-7-32gb-black",
        "name":"Apple iPhone 7 32GB Black",
        "fullPrice":400,
        "price":375,
        "screen":"4.7' IPS",
        "capacity":"32GB",
        "color":"black",
        "ram":"2GB",
        "year":2016,
        "image":"img/phones/apple-iphone-7/black/00.jpg"
      },
      {
        "id":"2",
        "category":"phones",
        "phoneId":"apple-iphone-7-plus-32gb-black",
        "itemId":"apple-iphone-7-plus-32gb-black",
        "name":"Apple iPhone 7 Plus 32GB Black",
        "fullPrice":540,
        "price":500,
        "screen":"5.5' IPS",
        "capacity":"32GB",
        "color":"black",
        "ram":"3GB",
        "year":2016,
        "image":"img/phones/apple-iphone-7-plus/black/00.jpg"
      }
    ]
  ```

</details>


<br />

## GET /products/:id

Every product has an id number from 1 to 71.

Load specific info on a `/products/id` endpoint.

Example `/products/1`.

Example `/products/apple-iphone-7-32gb-black`.

U can use only numbers from 1 to 71 or slug ex. `phoneId` property (from product body).

Otherwise you get error.

Response body example:

<details>
  <summary>Response body example <--Click Me</summary>

  ```json
    [
      {
        "id":"apple-iphone-7-32gb-black",
        "namespaceId":"apple-iphone-7",
        "name":"Apple iPhone 7 32GB Black",
        "capacityAvailable":[
          "32GB"
        ],
        "capacity":"32GB",
        "priceRegular":400,
        "priceDiscount":375,
        "colorsAvailable":[
          "black",
          "rosegold",
          "gold",
          "silver"
        ],
        "color":"black",
        "images":[
          "img/phones/apple-iphone-7/black/00.jpg",
          "img/phones/apple-iphone-7/black/01.jpg",
          "img/phones/apple-iphone-7/black/02.jpg",
          "img/phones/apple-iphone-7/black/03.jpg",
          "img/phones/apple-iphone-7/black/04.jpg"
        ],
        "description":[
          {
            "title":"And then there was Pro",
            "text":[
              "A transformative triple-camera system that adds tons of capability without complexity.",
              "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
            ]
          },
          {
            "title":"Camera",
            "text":[
              "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
            ]
          },
          {
            "title":"Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
            "text":[
              "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
            ]
          }
        ],
        "screen":"4.7' IPS",
        "resolution":"1334x750",
        "processor":"Apple A10",
        "ram":"2GB",
        "camera":"12 Mp + 7 Mp",
        "zoom":"Digital, 5x",
        "cell":[
          "GPRS",
          "EDGE",
          "WCDMA",
          "UMTS",
          "HSPA",
          "LTE"
        ]
      }
    ]
  ```

</details>

</br> 

## Deployment

U can use [Render.com](https://render.com/) for deployment.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
