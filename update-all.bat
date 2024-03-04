@echo off
cd production && update.bat
echo "prod is up to date"
cd ../nightly && update.bat
echo "nightly is up to date"
cd ../