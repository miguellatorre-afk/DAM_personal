--1. Crear una consulta de inserción de la información en una tabla cualquiera--
--INSERTAR INFO EN CLIENTES
INSERT INTO CLIENTES (DNI,NOMBRE, APELLIDOS, RESIDENCIA, FE_ADQUISICION,TELEF,IS_TITULAR)  VALUES ('78328120L', 'Jose', 'Ibañez Acolao', 'Madrid', TO_DATE('2020-03-07', 'YYYY-MM-DD'), 452345478, 76543211.7, 'S');
COMMIT;

--2. Crear una consulta de actualización de la información de una tabla cualquiera.--
--ACTUALIZAR EL CAMPO DE PAGADA DE 'N' A 'S'
SELECT PAGADA FROM FACTURA
UPDATE FACTURA SET PAGADA = 'S'
WHERE NUMFACTURA = 100003;
COMMIT;

--3. Crear una consulta que muestre un listado agrupado de toda o parte de la información almacenada. En la consulta deben aparecen un filtrado con la función de agregado utilizada.--
--SELECCIOMNAR EL TOTAL DE HORAS INVERTIDAS EN VEHICULOS QUE INGRESARON ANTES DE ABRIL DE 2024
SELECT VE.FE_INGRESO, SUM(FA.NHORAS)
FROM FACTURA FA INNER JOIN VEHICULOS VE
ON FA.MATRICULA=VE.MATRICULA
GROUP BY VE.FE_INGRESO
HAVING VE.FE_INGRESO < TO_DATE('2024-04-01', 'YYYY-MM-DD');

--4.Crear una consulta que muestre, mediante una combinación externa, un listado con toda la información de una tabla principal que no tenga información relacionada en una tabla secundaria.--
--SELECCIONAR VEHICULOS CUYAS FACTURAS AUN NO HAN SIDO PAGADAS
SELECT *
FROM VEHICULOS VE LEFT JOIN FACTURA FA
ON VE.MATRICULA=FA.MATRICULA
WHERE FA.FE_PAGO IS NULL;

--5. Crear una consulta que muestre un listado de registros que contengan una determinada cadena en un campo de tu elección --
--MOSTRAR TODOS LOS REGISTROS DE LA TABLA CLIENTES EN CUYOS CAMPOS DE RESIDENCIA PAREZCA LA PALABRA 'Calle'
SELECT * FROM CLIENTES
WHERE  RESIDENCIA LIKE '%Calle%';

