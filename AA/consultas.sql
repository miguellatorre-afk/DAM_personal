--1. Crear una consulta de inserción de la información en una tabla cualquiera--

INSERT INTO CLIENTES (DNI,NOMBRE, APELLIDOS, RESIDENCIA, FE_ADQUISICION,TELEF,IS_TITULAR)  VALUES ('78328120L', 'Jose', 'Ibañez Acolao', 'Madrid', TO_DATE('2020-03-07', 'YYYY-MM-DD'), 452345478, 76543211.7, 'S');
COMMIT;

--2. Crear una consulta de actualización de la información de una tabla cualquiera.--

SELECT PAGADA FROM FACTURA
--UPDATE FACTURA SET PAGADA = 'S'
WHERE NUMFACTURA = 'F0002';
COMMIT;

--3. Crear una consulta que muestre un listado agrupado de toda o parte de la información almacenada. En la consulta deben aparecen un filtrado con la función de agregado utilizada.--

--4.Crear una consulta que muestre, mediante una combinación externa, un listado con toda la información de una tabla principal que no tenga información relacionada en una tabla secundaria.--

--5. Crear una consulta que muestre un listado de registros que contengan una determinada cadena en un campo de tu elección --