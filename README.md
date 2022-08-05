<p align='center'>
<b># REST API Best practices implementation using a 3 layer architecture (Backend)</b>
</p>

<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659384499/Captura_de_pantalla_2022-08-01_150737_ixu1im.png' />
<div><i>3 layer architecture</i></div>
<br />
<p>
The project is divided into 3 layers:
<div><b>The controller layer</b>, which will handle requests and responses.</div>
<div><b>The service layer</b>, which will handle modules and helper functions.</div>
<div>And the <b>data access layer</b>, which will handle the data in the database.</div>

Additionally, routing is given version support capabilities.
</p>
<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659655004/folders_tree_lfi61m.png' />
<div><i>Folders tree design</i></div>
<br />
<p>
This architecture allows you to maintain a clean and quality code, quickly change access to a different database that could occur for different reasons, making the migration from, for example, to an express to mongo database easy to perform.</p>
<img src='https://res.cloudinary.com/real-estate-ads/image/upload/v1659658271/service_layer_hxv5te.png' />
<div><i>Fast switching between databases</i></div>
<br/>
<p>
<b>This project has a complete CRUD </b>(create, read, update and delete) implementation, please check the functionality in the following link or you can also download the code and try the fast switching between databases. For now you can try the support for quick switch between a db.json and a postgres db:
</p>