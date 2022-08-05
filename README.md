<p align='center'>
# REST API Best practices implementation using a 3 layer architecture
</p>
(Backend)

<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659384499/Captura_de_pantalla_2022-08-01_150737_ixu1im.png' />
<p>
The project is divided into 3 layers:
<div>The controller layer, which will handle requests and responses.</div>
<div>The service layer, which will handle modules and helper functions.</div>
<div>And the data access layer, which will handle the data in the database.</div>

Additionally, routing is given version support capabilities.
</p>
<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659655004/folders_tree_lfi61m.png' />
<p>
This architecture allows you to maintain a clean and quality code, quickly change access to a different database that could occur for different reasons, making the migration from, for example, to an express to mongo database easy to perform.
<p>
This project has a complete CRUD (create, read, update and delete) implementation, please check the functionality in the following link or you can also download the code and try the fast switching between databases. For now you can try the support for quick switch between a db.json and a postgres db:
</p>