---
title: "The Peskas Management Platform: full control for those who own the data"
date: 2026-10-03T09:00:00Z
author: "Lorenzo Longobardi & Alexander Tilley"
draft: false
description: "On the Peskas Management Platform, the institutions that collect fisheries data decide what counts as valid, monitor their enumerators' work, download the data with its definitions and learn to analyse it."
tags: [ "Management Platform", "Data Quality", "Data Sovereignty", "Capacity Building" ]
ShowToc: false
TocOpen: false
mermaid: true
cover: /img/management-platform-submissions.jpg
---

Every figure Peskas publishes starts with an enumerator at a landing site, recording a boat's catch on a tablet. Before those records become statistics, someone who knows the landing sites has to check them. The Peskas Management Platform is where that happens. It is also where the institutions that collect the data monitor their enumerators' work and take the data back for their own use.

The platform is used by staff of the Zanzibar Fisheries and Marine Resources Research Institute (ZAFIRI), the Kenya Fisheries Service (KEFS), Mozambique's National Directorate of Fisheries and Aquaculture (DINAPA) and Timor-Leste's Ministry of Agriculture and Fisheries (MAF), in English, Portuguese and Swahili. It began as a tool for reviewing records and was called the validation portal. It now covers the whole path from the landing site to the analysis, and its name has changed to match.

## The data stays under its owners' control

Each country's landing data belongs to its national fisheries authority, and the platform is organised around that. Access follows the owners' decisions. Accounts are created by the Peskas team or a platform administrator, and each person sees only the data of the surveys assigned to them, so the data of one country stays out of sight of anyone who has not been given access to it.

Owners can also see what happens to their data. Every decision on a record carries the name of the person who made it, and administrators can check who looked at or downloaded which data, and when.

Control also means using the data independently. Before the platform and the [Peskas API](/blog/peskas-api), getting a copy of the data meant asking the Peskas team, who prepared an export by hand. Now the institutions download their validated records whenever they need them, with the definition of every column, and their staff can learn to analyse them in the Data Academy.

## The final word on every record

When new records arrive, automatic checks flag the ones that look wrong, such as a trip lasting more than five days or a catch far above the usual range. A flag is a warning. Whether a record is right is decided by the people who know the landing sites and the enumerators.

From one table, reviewers find the flagged records, read what each flag means, and approve or reject each record. When something needs correcting, the platform opens the original record so it can be fixed where it was entered. Decisions are kept from one data update to the next, so no record has to be reviewed twice.

{{<mermaid>}}
%%{init: {'theme': 'neutral', 'themeVariables': { 'fontFamily': 'Roboto Condensed', 'fontSize': '14px'}}}%%
flowchart LR
  E([Landings recorded<br>on tablets]) --> Q[Automatic<br>quality checks]
  Q --> R[Review on the<br>Management Platform]
  R --> API{{Peskas API<br>validated data}}
  API --> D([Downloads and lessons<br>on the Management Platform])
  API --> A([Analysts' own<br>R or Python code])
  API --> DASH([Public<br>dashboards])
{{</mermaid>}}
{{< rawhtml >}}<figcaption>The institutions that collect the data review it before it enters the Peskas API. Everything that uses the data afterwards reads it from the API: the platform's downloads and lessons, analysts' own code and the public dashboards.</figcaption>{{< /rawhtml >}}

## Monitoring enumerators to improve the data

The quality of the data starts with the enumerators, and helping them record well improves everything built on their records. The Enumerator Performance page shows, for each survey and period, how many records each enumerator sends, what share of them pass every check, and how their submissions change over time. For any one enumerator, it also shows which checks their records fail most often.

This turns data errors into feedback a coordinator can give. If one enumerator's records keep failing the same check, for example fish lengths outside the range of the species, the coordinator can see it, go through it with that person, and later compare a new period to see whether their share of clean records has gone up. When the same problem comes up across many enumerators, it points to a part of the survey that needs clearer instructions or a training session. The page also shows early when someone has stopped sending records.

{{< figure src="/img/management-platform-enumerators.jpg" >}}
{{< rawhtml >}}<figcaption>Records sent by each enumerator in one survey. Names are hidden here.</figcaption>{{< /rawhtml >}}

## Downloading data, with its definitions

Users choose what they need: a survey, a district, a species, validated or raw records, and trip or catch details. They can look at the first rows before downloading the selection as a file that opens in a spreadsheet. A data dictionary explains every column, with its meaning, unit, examples and expected values.

The data comes from the Peskas API, with the same structure and the same definitions in every country. Analysts who work in R or Python can reach it directly through the API.

{{< figure src="/img/management-platform-dictionary.jpg" >}}
{{< rawhtml >}}<figcaption>The data dictionary explains each column of the download.</figcaption>{{< /rawhtml >}}

## Learning to analyse the data

The Data Academy has five short lessons of 10 to 20 minutes each, written for people who have never written code. They teach R, a free data analysis tool, and run in the browser with nothing to install. Every lesson works on the learner's own landing records. The course starts with what each column means, moves on to finding records and adding them up by district, gear or species, and ends with a chart that can go into a report. Learners predict a result before they run the code, and each lesson has exercises with hints and answers. A printable recipe card collects every command on one page.

{{< figure src="/img/management-platform-academy.jpg" >}}
{{< rawhtml >}}<figcaption>The five Data Academy lessons and the recipe card.</figcaption>{{< /rawhtml >}}

## Help from any page

A form on every page sends questions and problems straight to the Peskas team, in English, Portuguese or Swahili, with screenshots or files attached. It covers the whole Peskas system, including the country dashboards and the Tracks app, so a user can report a figure that looks wrong or propose a new quality check from the same place.

## What comes next

Many fisheries offices work in spreadsheets. The next addition is an Excel workbook built for the data downloaded from the platform, so that staff can work with their records in a tool they already use, with the same field definitions as the rest of Peskas.

## Find out more

The Management Platform is at [validation.peskas.org](https://validation.peskas.org) and needs an account from the Peskas team. Its [source code](https://github.com/WorldFishCenter/peskas.zanzibar.validation) is open. To request access, or to ask about the platform, write to peskas.platform@gmail.com.
