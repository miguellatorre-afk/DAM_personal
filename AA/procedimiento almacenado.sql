--1-Crea un procedimiento almacenado que realice el borrado de parte de la información almacenada en una tabla secundaria, donde el/los criterios de borrado se obtengan de Una tabla principal.
--El/los criterios de borrado de la tabla principal deberán obtenerse a partir de un parámetro de entrada del procedimiento almacenado.
--BORRADO DE LOS REGISTROS DE LA TABLA DETFACTURA EN DONDE EL VALOR DE IMPORTE CORRESPONDIENTE DE LA TABLA REPUESTOS SEA SUPERIOR AL PARAMETRO DE ENTRADA
CREATE OR REPLACE PROCEDURE BORRADO_PARCIAL(IMPORTE_MAXIMO IN NUMBER) AS
    
BEGIN
DELETE FROM DETFACTURA 
WHERE REFERENCIA IN (
    SELECT REFERENCIA
    FROM REPUESTOS
    WHERE IMPORTE>IMPORTE_MAXIMO);

DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' filas borradas.');

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('NO SE ENCONTRÓ EL IMPORTE');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: ' || SQLCODE || ' : ' || SQLERRM);       
END;
/

--2-Crea un procedimiento almacenado con parámetros de entrada y salida. Dicho procedimiento debe contener un cursor usado cuando se cumpla cierta condición en el
--parámetro de entrada. El parámetro de salida deberá ser mostrado por pantalla en la llamada al procedimiento.

CREATE OR REPLACE PROCEDURE COMPROBAR(SEGURO IN , INFO_VEHICULO OUT VARCHAR2) AS

CURSOR C1 IS 
    SELECT MATRICULA, MARCA, MODELO 
    FROM VEHICULO
    WHERE ASEGURADO = SEGURO;

OU_MAT VEHICULOS.MATRICULA;
OU_MARCA VEHICULOS.MARCA;
OU_MODELO VEHICULOS.MODELO;

BEGIN
IF
    OPEN C1;
    

CLOSE C1;

    
END;




    
