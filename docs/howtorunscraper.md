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

## Results!

You should now see this in your terminal:

```bash

> DocSearch: https://www.stirlingdocs.com/ 1 records)
> DocSearch: https://www.stirlingdocs.com/docs/firefighting 11 records)
> DocSearch: https://www.stirlingdocs.com/docs/howtosubmitdoc 19 records)
> DocSearch: https://www.stirlingdocs.com/docs/installationguide 28 records)
> DocSearch: https://www.stirlingdocs.com/docs/lockoutprocedure 18 records)
> DocSearch: https://www.stirlingdocs.com/docs/howtodocs 32 records)
> DocSearch: https://www.stirlingdocs.com/docs/externalcomm 3 records)
> DocSearch: https://www.stirlingdocs.com/docs/firesafetyduties 15 records)
> DocSearch: https://www.stirlingdocs.com/docs/howtorunscraper 26 records)
> DocSearch: https://www.stirlingdocs.com/docs/ 7 records)
> DocSearch: https://www.stirlingdocs.com/docs/emergencyprodeduresineventoffire 14 records)
> DocSearch: https://www.stirlingdocs.com/blog/welcome 4 records)
> DocSearch: https://www.stirlingdocs.com/docs/apprentice 5 records)
> DocSearch: https://www.stirlingdocs.com/docs/culture 10 records)
> DocSearch: https://www.stirlingdocs.com/docs/cleanupschedule 10 records)
> DocSearch: https://www.stirlingdocs.com/docs/cheatsheet 78 records)
> DocSearch: https://www.stirlingdocs.com/search 0 records)
> DocSearch: https://www.stirlingdocs.com/docs/standupmeetings 31 records)
> DocSearch: https://www.stirlingdocs.com/docs/terminology 4 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/solidsurfacesink 48 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/sprayequipmentcleaning 12 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/woodfinishing 26 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/sitedamagerefinishing 31 records)
> DocSearch: https://www.stirlingdocs.com/docs/toollist 49 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/rawwoodsanding 14 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/modernshaker 16 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/prepsurfaceprimer 18 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/measureguide 11 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/primersandingtrunc 13 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/installmeeting 45 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/raisedpaneldoors 24 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/installingdraweranddoorfaces 32 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/mixformula 34 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/installation2 31 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/finishingassembley 10 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/doc2 33 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/digimark 3 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/hardwaredeliverybox 28 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/finishingwhitepainteddoors 26 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/finishingcleanup 11 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/installation 59 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/basecabinetassembley 56 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/purchasing 47 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/leadhand 19 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/delivery2 25 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/delivery 22 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/roles_template 25 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/manager 19 records)
> DocSearch: https://www.stirlingdocs.com/docs/screwboxlist 36 records)
> DocSearch: https://www.stirlingdocs.com/docs/cheatsheet/ 78 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/doc2/ 33 records)
> DocSearch: https://www.stirlingdocs.com/docs/mdx 21 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/helper 39 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/benchman 29 records)
> DocSearch: https://www.stirlingdocs.com/docs/policy 32 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/cncop 22 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/installer 23 records)
> DocSearch: https://www.stirlingdocs.com/blog/tags/hola 3 records)
> DocSearch: https://www.stirlingdocs.com/blog/tags/facebook 4 records)
> DocSearch: https://www.stirlingdocs.com/blog/tags/hello 7 records)
> DocSearch: https://www.stirlingdocs.com/blog/hola 3 records)
> DocSearch: https://www.stirlingdocs.com/blog/tags/docusaurus 10 records)
> DocSearch: https://www.stirlingdocs.com/blog/tags 0 records)
> DocSearch: https://www.stirlingdocs.com/docs/sop/sopintroduction 19 records)
> DocSearch: https://www.stirlingdocs.com/docs/roles/roles 23 records)
> DocSearch: https://www.stirlingdocs.com/blog/hello-world 5 records)
> DocSearch: https://www.stirlingdocs.com/blog 10 records)

Nb hits: 1500

```

Now you can check the site and make sure that what ever files you uploaded are searchable.
<!--/mnt/c/Users/user/Documents/GitRepo/stirlingdocs my actual string-->