cd C:\Programming\February 2018\BakeryFrontEnd\src\assets
setlocal enabledelayedexpansion
for %%a in (*.jpeg) do (
set f=%%a
set f=!f:^(=!
set f=!f:^)=!
set f=!f: =!
ren "%%a" "!f!"
)
