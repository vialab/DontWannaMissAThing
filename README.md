# Don't Wanna Miss a Thing

## Project Summary
<p align="justify">
Watching subtitled videos in a foreign language demands sustained visual attention, which can put viewers at risk of missing content due to distraction, such as checking notifications. In this work, we introduced a gaze-aware video player that adapts playback to support attention recovery. We evaluated three gaze-aware techniques: adaptive pausing, stacked subtitles, and audio language switching (dubbing). In a comparative study with 24 participants, we evaluated these techniques against a standard video player with subtitles. While adaptive pausing improved task performance and reduced distractions, stacked subtitles helped recover reading but occasionally slowed faster readers. The benefit of dubbing was limited, resulting in additional cognitive load during the process. Ultimately, all gaze-aware interventions outperformed the standard video player. This work highlights gaze-adaptive systems that seamlessly support attention recovery into everyday viewing experiences.
</p>

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/en/download/)
- Next, install all dependencies from BOTH `/frontend` and `/mobile-quiz` using:
```
pnpm install
```
or
```
npm install
```
### How to run

#### Local
1. Calibrate your Tobii Eye Tracker 5
   - Launch the Tobii Experience and click on "Improve calibration"
   - If Tobii Experience is not installed automatically when plugged in, download it [here](https://gaming.tobii.com/getstarted/)

2. To run locally
```
pnpm start
```
or
```
npm start
```
*This will start an eyetracker server and the application. A blank terminal window will open for the eyetracker server.*

>**NOTE:** Make sure to run both `/frontend` and `/mobile-quiz`

> `pnm dev` will run without the eyetracker

### Troubleshooting

#### Calibrate the Tobii 5
You need to install [Tobii Experience](https://help.tobii.com/hc/en-us/articles/360009929118-Get-the-Tobii-Experience-app) to use the eyetracker.

#### Eye tracker server issues
If the `TobiiServer.exe` file gives you an error about `Tobii.EyeX.Client.dll` being missing, the issue might be with your Visual C++ redistributable. Install the latest versions of BOTH x86 and x64, then try again. Also, download the 2012 versions (both x86 and x64), linked [here](https://learn.microsoft.com/en-GB/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2012-vc-110-update-4): 
