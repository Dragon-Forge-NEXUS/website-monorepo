echo -e "\e[32mUPDATE STARTED\e[0m"
cd production && bash update.bat
echo "prod is up to date"
cd ../nightly && bash update.bat
echo "nightly is up to date"
cd ../