# "Awesome" Android OEM issues (Common problems with specific Android device types from OEMs)

As Android developers, we struggle daily with the variety of OEMs, each coming with their own problems. Something that seems to work with most of the devices, may crash or behave in an unexpected way on a particular type of device. And usually we recognize this rather late, through unhappy clients. 

This repo is created to share the problems we encountered with specific devices, so that others can look up and be cautious about it before putting theirs app into production.

## State of this repository

This repository is Work-In-Progress: We need to figure out how to organize it so it works well on the long run, as new OEM issues arise, evolve, and are fixed (hopefully!).

You can see our goals [in the issue #1](https://github.com/OyaCanli/awesome-android-oem-issues/issues/1). Ideas or considerations we forgot about are welcome in the comments!


## How to Contribute

You can already contribute by sharing your experiences as **issues**. Please add an appropriate title and use appropriate tags including **brand and model of the device**, **Android OS version** and **related APIs, libraries used** that causes the problem, so that others can easily search through. If you had solved your issue, that would be awesome to add your **solutions** as well!

## Project structure

```
.
+--css
+--data
---+--issues.json <-- The file to modify to contribute
+--imgs
+--js
+--theme
+--index.html
```

## Data structure

To contribute, please insert the new issue in the issues.json file and respect the following structure :

```json
{
    "api": "androidx.navigation",
    "classes": [
      {
        "classname": "androidx.navigation.fragment",
        "apiurl": "https://developer.android.com/reference/androidx/navigation/fragment/package-summary",
        "devices": [
          "Nokia 7+",
          "Samsung Galaxy S10"
        ],
        "description": "Description of the issue",
        "discussion": "https://google.fr" //Optionnal
      }
    ]
  }
````

To test your implementation, launch your web browser with the option `allow-file-access-from-files`.