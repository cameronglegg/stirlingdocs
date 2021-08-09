---
id: howtorunscraper
title: How to run the Doc Scraper for Search
---

## Creating the Index results for search

This will walk you through how to create the records needed for your documents to be searchable.

## Dependancies

You need to install [**Docker**](https://docs.docker.com/get-docker/)

Then ensure that docker is running

```shell
docker --version
```

You should see a version number returned. If you are using WSL see [**here**](https://docs.docker.com/docker-for-windows/wsl/) for documentation.

---
Ensure that you have python installed:

Ubuntu
```shell
apt install python
```

Powershell
```powershell
Install-Module python
```
---
You also need "JQ":

Ubuntu
```shell
apt install jq
```

Powershell
```powershell
chocolatey install jq
```

## Run the docker container

First, ensure that you are in the */stirlingdocs folder as this command will use the ["config.json"](https://github.com/cameronglegg/stirlingdocs/blob/ff1b75f606a780b97702a9f5432bca528f7b6396/config.json) file to create the indices.

Now run this command:

:::warning
Ensure that you change the path to your file directory
:::

:::caution
Check to make sure that the docker container that is pulled it the most up to date version.
:::

```md
docker run -it --env-file=.env -e "CONFIG=$(cat /your/doc/path/config.json | jq -r tostring)" algolia/docsearch-scraper
```

:::tip
If you receive an error regarding "Hosts" try running this command:

```shell
sudo iptables -I INPUT -i docker0 -j ACCEPT
```

This will open all the ports on the docker container.
:::

This will pull a docker container and run the python based web scraper. It will look at our site and pull the pre defined data that is in the config.json. 

Then it creates a .json data schema and pushes it to our Algolia index.

Done!

Now you can check the site and make sure that what ever files you uploaded are searchable.
<!--/mnt/c/Users/user/Documents/GitRepo/stirlingdocs my actual string-->