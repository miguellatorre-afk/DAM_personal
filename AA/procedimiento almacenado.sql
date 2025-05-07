--1-Crea un procedimiento almacenado que realice el borrado de parte de la información almacenada en una tabla secundaria, donde el/los criterios de borrado se obtengan de Una tabla principal.
--El/los criterios de borrado de la tabla principal deberán obtenerse a partir de un parámetro de entrada del procedimiento almacenado.
--BORRADO DE LOS REGISTROS DE LA TABLA DETFACTURA EN DONDE EL VALOR DE IMPORTE CORRESPONDIENTE DE LA TABLA REPUESTOS SEA SUPERIOR AL PARAMETRO DE ENTRADA
CREATE OR REPLACE PROCEDURE BORRADO_PARCIAL(IMPORTE_MAXIMO IN NUMBER) AS


SET SERVEROUTPUT ON

BEGIN

DELETE 
FROM DETFACTURA DE
INNER JOIN REPUESTOS RE
ON DE.REFERENCIA=RE.REFERENCIA
WHERE RE.IMPORTE>IMPORTE_MAXIMO;

EXCEPTION

    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('NO SE ENCONTRÓ EL IMPORTE');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: ' || SQLCODE || ' : ' || SQLERRM);        

END;
