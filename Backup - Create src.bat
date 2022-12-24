@ECHO ON

SET ecommerce=ecommerce
SET year=%date:~10,4%
SET month=%date:~4,2%
SET day=%date:~7,2%
SET time=%TIME:~0,2%%TIME:~3,2%
set dateAndTime=%year%_%month%_%day%_%time%


SET soureFolder="C:\Users\adie\Documents\react\ecommerce"
SET pathToBackup="C:\Users\adie\Documents\react\BACKUP\ecommerce\%ecommerce%%dateAndTime%"  


"C:\Program Files\WinRAR\WinRAR.exe" a  %pathToBackup% %soureFolder% 


PAUSE