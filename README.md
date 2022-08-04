# REST API - Best practices of implementation using a 3 layer architecture
(Backend)

The project is divided into 3 layers:

<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659384499/Captura_de_pantalla_2022-08-01_150737_ixu1im.png' />

The controller layer, which will handle requests and responses.
The service layer, which will handle modules and helper functions.
And the data access layer, which will handle the data in the database.

Additionally, routing is given version support capabilities.

This architecture allows you to quickly change access to a different database that could occur for different reasons, making the migration from, for example, an express to mongo database easy to do.

<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659655004/folders_tree_lfi61m.png' />