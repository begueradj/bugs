## Purpose
The goal of this repo is to reproduce the following error message:
```cmd
 code: 'ER_CANT_DROP_FIELD_OR_KEY',                                                                                                             
  errno: 1091,                                                                                                                                   
  sqlMessage:                                                                                                                                    
   "Can't DROP 'persons__foreign'; check that column/key exists",                                                                                
  sqlState: '42000',                                                                                                                             
  index: 0, 
```

## Steps

1. Clone this repo
2. Install the dependencies: `npm install`
3. edit `.env` file and use a MySQL database
4. Run the migrations: `adonis migration:run`
5. Reset the migrations: `adonis migration:reset`

## Author
Billal Begueradj
