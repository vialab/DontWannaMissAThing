%%
%% This is file `sample-manuscript.tex',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% samples.dtx  (with options: `manuscript')
%% 
%% IMPORTANT NOTICE:
%% 
%% For the copyright see the source file.
%% 
%% Any modified versions of this file must be renamed
%% with new filenames distinct from sample-manuscript.tex.
%% 
%% For distribution of the original source see the terms
%% for copying and modification in the file samples.dtx.
%% 
%% This generated file may be distributed as long as the
%% original source files, as listed above, are part of the
%% same distribution. (The sources need not necessarily be
%% in the same archive or directory.)
%%
%% Commands for TeXCount
%TC:macro \cite [option:text,text]
%TC:macro \citep [option:text,text]
%TC:macro \citet [option:text,text]
%TC:envir table 0 1
%TC:envir table* 0 1
%TC:envir tabular [ignore] word
%TC:envir displaymath 0 word
%TC:envir math 0 word
%TC:envir comment 0 0
%%
%%
%% The first command in your LaTeX source must be the \documentclass command.
%%%% Small single column format, used for CIE, CSUR, DTRAP, JACM, JDIQ, JEA, JERIC, JETC, PACMCGIT, TAAS, TACCESS, TACO, TALG, TALLIP (formerly TALIP), TCPS, TDSCI, TEAC, TECS, TELO, THRI, TIIS, TIOT, TISSEC, TIST, TKDD, TMIS, TOCE, TOCHI, TOCL, TOCS, TOCT, TODAES, TODS, TOIS, TOIT, TOMACS, TOMM (formerly TOMCCAP), TOMPECS, TOMS, TOPC, TOPLAS, TOPS, TOS, TOSEM, TOSN, TQC, TRETS, TSAS, TSC, TSLP, TWEB.
% \documentclass[acmsmall]{acmart}

%%%% Large single column format, used for IMWUT, JOCCH, PACMPL, POMACS, TAP, PACMHCI
% \documentclass[acmlarge,screen]{acmart}

%%%% Large double column format, used for TOG
% \documentclass[acmtog, authorversion]{acmart}

%%%% Generic manuscript mode, required for submission
%%%% and peer review
% \documentclass[manuscript,screen,review]{acmart}
\documentclass[sigconf]{acmart}
%% Fonts used in the template cannot be substituted; margin 
%% adjustments are not allowed.
%%
%% \BibTeX command to typeset BibTeX logo in the docs
\AtBeginDocument{%
  \providecommand\BibTeX{{%
    \normalfont B\kern-0.5em{\scshape i\kern-0.25em b}\kern-0.8em\TeX}}}

%% Rights management information.  This information is sent to you
%% when you complete the rights form.  These commands have SAMPLE
%% values in them; it is your responsibility as an author to replace
%% the commands and values with those provided to you when you
%% complete the rights form.
\copyrightyear{2026}
\acmYear{2026}
\setcopyright{cc}
\setcctype{by}
\acmDOI{ }

%% These commands are for a PROCEEDINGS abstract or paper.
\acmConference[ACM ETRA '26]{Make sure to enter the correct
  conference title from your rights confirmation emai}{June 03--05,
  2018}{Woodstock, NY}
%
%  Uncomment \acmBooktitle if th title of the proceedings is different
%  from ``Proceedings of ...''!
%
\acmBooktitle{ } 
% \acmPrice{}
\acmISBN{}

%%
%% Submission ID.
%% Use this when submitting an article to a sponsored event. You'll
%% receive a unique submission ID from the organizers
%% of the event, and this ID should be used as the parameter to this command.
\acmSubmissionID{1019}

%%
%% For managing citations, it is recommended to use bibliography
%% files in BibTeX format.
%%
%% You can then either use BibTeX with the ACM-Reference-Format style,
%% or BibLaTeX with the acmnumeric or acmauthoryear sytles, that include
%% support for advanced citation of software artefact from the
%% biblatex-software package, also separately available on CTAN.
%%
%% Look at the sample-*-biblatex.tex files for templates showcasing
%% the biblatex styles.
%%

%\settopmatter{printacmref=false} % Removes citation information below abstract
% \renewcommand\footnotetextcopyrightpermission[1]{} % Removes footnote with conference info
% \pagestyle{plain} % Removes running headers

%%
%% The majority of ACM publications use numbered citations and
%% references.  The command \citestyle{authoryear} switches to the
%% "author year" style.
%%
%% If you are preparing content for an event
%% sponsored by ACM SIGGRAPH, you must use the "author year" style of
%% citations and references.
%% Uncommenting
%% the next command will enable that style. -> ETRA
\citestyle{acmauthoryear}

\input{_setup}

\usepackage{subcaption}

%%
%% end of the preamble, start of the body of the document source.
\begin{document}
\tolerance=400 
%%
%% The "title" command has an optional parameter,
%% allowing the author to define a "short title" to be used in page headers.
% \title{Mitigating Distraction in Video Viewing with Gaze-Driven Subtitles}
\title[Gaze-Aware Implicit Interventions for Distraction Recovery]{Don’t Wanna Miss a Thing: Gaze-Aware Implicit Interventions for Distraction Recovery in Foreign-Language Videos}

%%
%% The "author" command and its associated commands are used to define
%% the authors and their affiliations.
%% Of note is the shared affiliation of the first two authors, and the
%% "authornote" and "authornotemark" commands
%% used to denote shared contribution to the research.
\author{Mohammed Ahmed}
\orcid{0009-0002-4234-0057}
\affiliation{%
  \institution{Ontario Tech University}
  \city{Oshawa}
  \country{Canada}
}
\email{mohammed.ahmed2@ontariotechu.net}

\author{Benedict Leung}
\orcid{0009-0003-6754-9874}
\affiliation{%
  \institution{Ontario Tech University}
  \city{Oshawa}
  \country{Canada}
}
\email{benedict.leung1@ontariotechu.net}

\author{Mariana Shimabukuro}
\orcid{0000-0003-4104-0781}
\affiliation{%
  \institution{Ontario Tech University}
  \city{Oshawa}
  \country{Canada}
}
\email{mariana.shimabukuro@ontariotechu.ca}

\author{Christopher Collins}
\orcid{0000-0002-4520-7000}
\affiliation{%
  \institution{Ontario Tech University}
  \city{Oshawa}
  \country{Canada}
}
\email{christopher.collins@ontariotechu.ca}

%%
%% By default, the full list of authors will be used in the page
%% headers. Often, this list is too long, and will overlap
%% other information printed in the page headers. This command allows
%% the author to define a more concise list
%% of authors' names for this purpose.
\renewcommand{\shortauthors}{Ahmed et al.}

%%
%% The abstract is a short summary of the work to be presented in the
%% article.
\begin{abstract}
Watching subtitled videos in a foreign language demands sustained visual attention, which can put viewers at risk of missing content due to distraction, such as checking notifications. In this work, we introduced a gaze-aware video player that adapts playback to support attention recovery. We evaluated three gaze-aware techniques: adaptive pausing, stacked subtitles, and audio language switching (dubbing). In a comparative study with 24 participants, we evaluated these techniques against a standard video player with subtitles. While adaptive pausing improved task performance and reduced distractions, stacked subtitles helped recover reading but occasionally slowed faster readers. The benefit of dubbing was     limited, resulting in additional cognitive load during the process. Ultimately, all gaze-aware interventions outperformed the standard video player. This work highlights gaze-adaptive systems that seamlessly support attention recovery into everyday viewing experiences.

%Subtitles are a text translation of a given video’s dialogue. Subtitles typically appear on the screen when a person starts speaking and disappear after a set time period. This display method has an inherent downside - it is difficult to keep up with for distracted viewers, and viewers that are not fluent in the video’s language. In this work, we propose a gaze-aware video playback system to increase subtitle processing and decrease cognitive load in viewers that are distracted. We explore three intervention methods: stacking subtitles when the viewer falls behind, and pausing or seamlessly changing the audio track to a familiar language when the viewer is distracted. We compared these methods to a standard video player in a user study (n=24) and tested user comprehension. The results show that while participants scored similarly in comprehension tests, viewers prefer gaze-aware interventions due to their lower cognitive load and increased enjoyment. 

% Visual attention is required to follow the narrative when watching subtitled media in another language. Thus common distractions, such as answering a text message during a movie, result in missing important plot points, requiring a replay. In this work, we propose a gaze-aware video player to reduce the cognitive load and comprehension impacts of distractions during viewing subtitled media. We explore three intervention methods: stacking subtitles, pausing, or changing the language of the audio track during detected distraction events. We evaluated these methods for cognitive load, preference, and comprehension impacts compared to a standard video player in a 24 participant lab study. While comprehension was not significantly improved, participants preferred the gaze-aware approaches, reporting lower cognitive load and greater enjoyment. 

%Subtitles are a text translation of a given video’s dialogue. Subtitles typically appear on the screen when a person starts speaking and disappear after a set time period. This display method has an inherent downside - it is difficult to keep up with for distracted viewers, and viewers that are not fluent in the video’s language. In this work, we propose a gaze-aware video playback system to increase subtitle processing and decrease the cognitive load in viewers that are distracted. We explore three intervention methods: stacking subtitles when the viewer falls behind, and pausing or seamlessly changing the audio track to a familiar language when the viewer is distracted. We compared these methods to a standard video player in a user study (n=24) and tested user comprehension. The results show that while participants scored similarly in comprehension tests, viewers prefer gaze-aware interventions due to their lower cognitive load and increased enjoyment. 
\end{abstract}

%%
%% The code below is generated by the tool at http://dl.acm.org/ccs.cfm.
%% Please copy and paste the code instead of the example below.
%%
\begin{CCSXML}
<ccs2012>
   <concept>
       <concept_id>10003120.10003121.10003124</concept_id>
       <concept_desc>Human-centered computing~Interaction paradigms</concept_desc>
       <concept_significance>500</concept_significance>
       </concept>
   <concept>
       <concept_id>10003120.10003121.10003125</concept_id>
       <concept_desc>Human-centered computing~Interaction devices</concept_desc>
       <concept_significance>500</concept_significance>
       </concept>
   <concept>
       <concept_id>10003120.10003121.10003122.10003334</concept_id>
       <concept_desc>Human-centered computing~User studies</concept_desc>
       <concept_significance>300</concept_significance>
       </concept>
   <concept>
       <concept_id>10003120.10003121.10003122.10010854</concept_id>
       <concept_desc>Human-centered computing~Usability testing</concept_desc>
       <concept_significance>300</concept_significance>
       </concept>
 </ccs2012>
\end{CCSXML}

\ccsdesc[500]{Human-centered computing~Interaction paradigms}
\ccsdesc[500]{Human-centered computing~Interaction devices}
\ccsdesc[300]{Human-centered computing~User studies}
\ccsdesc[300]{Human-centered computing~Usability testing}

%%
%% Keywords. The author(s) should pick words that accurately describe
%% the work being presented. Separate the keywords with commas.
\keywords{eye-tracking, implicit intervention, distraction recovery}

%% A "teaser" image appears between the author and affiliation
%% information and the body of the document, and typically spans the
%% page.
\aptLtoX[graphic=no, type=html]{
    \begin{teaserfigure}
      \centering
      \includegraphics[width=\twocolwidth]{figures/teaser1.png}
      \caption{An overview of the gaze-aware interventions during video-viewing in non-native languages. (a) Gaze detection identifies the viewer's attention away from the screen. Three intervention methods are introduced to resurface missing content: (b) Playback is paused to prevent content loss. (c) Subtitles are stacked to preserve missed dialogue. (d) Audio dubbing provides catch-up narration.}
      \Description{A four-part diagram (a-d) illustrating gaze-aware intervention methods. (a) A person sits in front of a monitor while looking at a smartphone. Red and blue dotted lines represent gaze direction and detection. (b) The monitor displays a pause icon, indicating that playback halts when the viewer looks away. (c) The monitor displays stacked subtitles, displaying missed dialogue that is visually accumulated. (d) A speech bubble with a translation icon appears on the monitor, representing audio dubbing to help viewers catch up with the dialogue.}
      \label{fig:teaser}
    \end{teaserfigure}
}{
    \begin{teaserfigure}
      \centering
      \includegraphics[width=\twocolwidth]{figures/teaser.pdf}
      \caption{An overview of the gaze-aware interventions during video-viewing in non-native languages. (a) Gaze detection identifies the viewer's attention away from the screen. Three intervention methods are introduced to resurface missing content: (b) Playback is paused to prevent content loss. (c) Subtitles are stacked to preserve missed dialogue. (d) Audio dubbing provides catch-up narration.}
      \Description{A four-part diagram (a-d) illustrating gaze-aware intervention methods. (a) A person sits in front of a monitor while looking at a smartphone. Red and blue dotted lines represent gaze direction and detection. (b) The monitor displays a pause icon, indicating that playback halts when the viewer looks away. (c) The monitor displays stacked subtitles, displaying missed dialogue that is visually accumulated. (d) A speech bubble with a translation icon appears on the monitor, representing audio dubbing to help viewers catch up with the dialogue.}
      \label{fig:teaser}
    \end{teaserfigure}
}

%%
%% This command processes the author and affiliation and title
%% information and builds the first part of the formatted document.
\maketitle

\section{Introduction}
\input{content/01-introduction}

\section{Related Work}
\input{content/02-related-work}

\section{Gaze Aware Video Player}
\input{content/03-player}

\section{User Study}
\input{content/04-user-study}

\section{Results}
\input{content/05-results}

\section{Discussion}
\input{content/06-discussion}

\section{Conclusion}
\input{content/07-conclusion}

\begin{acks}
We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC). We also thank the participants in this study.
\end{acks}

%%
%% The next two lines define the bibliography style to be used, and
%% the bibliography file.
\bibliographystyle{ACM-Reference-Format}
\bibliography{sample-base}

\appendix
\input{content/A1-Appendix}

\end{document}
\endinput
%%
%% End of file `sample-authordraft.tex'.


Introduction

Video has become one of the most popular formats for learning, entertainment, and communication. For many viewers, especially when engaging with content in an unfamiliar language, comprehension relies heavily on subtitles, which provide a text translation of the spoken dialogue. However, following a video with subtitles requires sustained attention and substantial cognitive effort~\cite{listeningEffortNonNative, effectsNonNative, complexityL2}. Yet video viewing is often interrupted. Distractions from notifications, multitasking, or mind-wandering can break focus, producing gaps in understanding~\cite{attentionClickers, daydreaming, cellphoneImpairLearning, dividedAttentionMOOC, MOOCIntervention}. When distractions occur, subtitles continue to advance, leaving non-fluent viewers with missing context. Prior eye-tracking research shows subtitle reading is highly consistent, with non-fluent viewers relying heavily on subtitles for comprehension~\cite{CognitiveEffectivenessSubtitle}. When attention lapses, this dependency makes recovery especially difficult. Unlike text, which affords selective re-reading, video forces viewers to rely on manual recovery strategies such as scrubbing through the timeline or re-watching entire segments~\cite{videoDigest}. These strategies are imprecise and time-consuming, and for viewers navigating a foreign language, identifying exactly what was missed or regaining narrative context can be especially challenging.

Gaze-aware interfaces offer a promising direction to address these shortcomings. Eye-tracking provides a reliable indicator of attention~\cite{eyeVisualAnalysis, gazeAttentive}. Gaze-based systems can predict learners' attention and engagement~\cite{classroomEyeTracking, classroomEyeTracking2, freyeingPan}, and these estimates can enhance learning performance, especially in video-based learning, where attention and engagement are closely linked to comprehension and outcomes~\cite{gazeTutor, frustratedBoredomLearning, mindlessAttractor}. 

Building on this foundation, we investigate how implicit gaze-based interaction can support distraction recovery during foreign-language video viewing, a scenario where comprehension depends strongly on subtitles. We focus on short-term gaze-triggered recovery from momentary lapses rather than long-term learning outcomes, establishing a basis for adaptive media experiences. Our gaze-aware video player monitors viewers’ visual behaviour and adapts playback and subtitle presentation accordingly. When attention shifts away, the system triggers one of three interventions (stacked subtitles, adaptive pausing, or audio language switching) to help viewers regain missed information with minimal disruption to viewing flow (\autoref{fig:teaser}).

% Our work advances this line of research by supporting distraction recovery during video viewing in foreign languages, where comprehension depends heavily on subtitle reading. Specifically, we focus on short-term, gaze-triggered recovery from attention lapses rather than long-term learning outcomes, laying a foundation for future gaze-adaptive comprehension systems. We introduce a gaze-aware video player that adapts subtitles and playback when attention lapses occur. Unlike static subtitles that continue to advance, our system uses gaze to trigger implicit interventions, such as stacked subtitles, automated pausing, or audio language switching, to aid the viewer when they are behind in subtitle processing, requiring minimal cognitive effort when engaging with content in a foreign language.

A user study with 24 participants evaluated three gaze-aware intervention techniques for subtitled video viewing: adaptive pausing, stacked subtitles, and dubbing. Participants performed distraction and comprehension tasks while watching videos in another language. \rev{The study investigates how these interventions support attention management and recovery from distraction during subtitle-dependent viewing and examines how factors such as cognitive load and user preferences shape their use.}

Related Works
Research on enhancing viewing experiences during video playback spans attention prediction, subtitle design, and gaze-aware interaction. Previous studies have investigated how viewers process subtitles, how to detect and reduce attention lapses, and how gaze can be used to adapt interfaces. We review these areas to identify gaps motivating gaze-aware interventions for non-fluent viewers.


\subsection{Attention-Based Interaction Techniques}
Watching videos in a foreign language demands sustained attention to subtitles~\cite{eyeAgeProficiency}, making non-fluent viewers particularly susceptible to missed information when distractions occur. Prior work has proposed interaction techniques that monitor non-verbal cues to infer attention levels and dynamically adapt playback~\cite{gazeTutor, classroomEyeTracking, classroomEyeTracking2, gazeLearningModel, engagementFacial, attentionFacialBody, mindlessAttractor}. In educational contexts, such attention-aware systems have been shown to improve engagement and learning outcomes~\cite{gazeTutor, frustratedBoredomLearning}.

For example, Mindless Attractor~\cite{mindlessAttractor} estimates engagement from head pose and subtly perturbs the audio to redirect attention without overt disruption. Other systems automatically pause lecture videos whenever the viewer is taking notes~\cite{gazeNotetaking}. However, most attention-aware systems have been designed for educational settings, and little is known about how these strategies generalize to everyday video viewing. Research on attention-aware interventions in foreign language videos is scarce, even though the interaction between audio and subtitle is known to influence comprehension and viewer comfort~\cite{eyeEarRelationship, impactAudioBilingual}. Additionally, the user experience of attention-aware interventions in non-instructional settings, such as entertainment or news videos, remains underexplored. Understanding these contexts could inform attention-aware systems that assist non-fluent viewers while preserving natural and uninterrupted viewing.

\subsection{Subtitle Processing}
Subtitles are one of the most common aids to support comprehension in unfamiliar languages. They provide a textual representation of spoken dialogue and can enhance understanding while reducing cognitive load~\cite{subtitleLearningSupport, subtitleEffort, subtitleImpact2}. For non-fluent viewers, subtitles play an especially critical role, enabling word recognition, vocabulary acquisition, and content recall when the spoken language is unfamiliar~\cite{nativeVsNonNative, foreignSpeechSubtitles, cognitiveSubtitle}.

Eye-tracking research has provided fine-grained insights into the processing of subtitles. Fixations can indicate attention and processing effort~\cite{eyeSemantic, GazeIntention}. In a subtitled video, fixation counts and durations reveal reading effort, language proficiency, and comprehension. Beginners tend to skip subtitles less often than advanced learners~\cite{eyeAgeProficiency}. Unlike fixations on general video content, which vary with personal strategies and visual complexity~\cite{ComprehensionDocumentaries, CognitiveEffectivenessSubtitle}, subtitle reading is highly consistent: viewers begin reading as soon as subtitles appear, even without prior training, typically without reducing attention to the image~\cite{learningProcessFixation, SubtitlesReadingPerformance, CognitiveEffectivenessSubtitle}. This tendency is even stronger when the soundtrack is in an unfamiliar language, and subtitles carry essential information~\cite{CognitiveEffectivenessSubtitle, eyeChildrenAdultsTV}.

However, subtitles assume uninterrupted attention. When distractions occur, they continue to advance in sync with dialogue, leaving non-fluent viewers with missing information that can be difficult to reconstruct. As they depend heavily on subtitles, even brief lapses can lead to comprehension breakdowns. Addressing this issue requires adaptive subtitles and audio presentations that can detect and respond to lapses in real time, supporting recovery and maintaining engagement.

\subsection{Gaze-Aware Interfaces for Videos}
Gaze-aware interfaces dynamically adjust content presentation based on where users look, offering opportunities to enhance accessibility and interactivity in video playback~\cite{moveye, videoChatGaze, gazeNotetaking}. For example, previous research has explored gaze-adaptive subtitle placement to avoid obscuring important visuals~\cite{viewOnViewer}. In immersive video systems, playback pauses when users fixate on subtitles and resumes when attention shifts away~\cite{storytellingVR}.

Designing gaze-aware video interfaces involves trade-offs between comprehension support and viewing continuity. Techniques such as gaze-triggered pausing~\cite{storytellingVR, gazeNotetaking}, replaying missed segments, or switching audio to the viewer’s native language~\cite{impactAudioBilingual} can aid comprehension but risk disrupting immersion. Effective designs must balance detection accuracy~\cite{classroomEyeTracking, classroomEyeTracking2}, multimodal synchronization~\cite{eyeEarRelationship}, and user acceptance across diverse contexts.

Overall, gaze-aware interfaces show promise for supporting non-fluent viewers through dynamic adjustments of subtitles and audio. Such approaches can mitigate information loss during lapses while maintaining the viewing flow. Yet, few studies have examined how to integrate gaze-driven interventions into everyday video viewing, leaving open opportunities to explore seamless, adaptive systems for foreign-language comprehension.

Techniques:

This study explores three implicit interaction techniques: attention-based video playback, attention-based dubbing, and subtitle stacking. The first two techniques assess user attention based on whether the gaze is off the screen, while subtitle stacking requires more precise eye-tracking, assuming attention has lapsed once the subtitles are no longer being read. These techniques aim to reduce cognitive load. We employed a traditional video player layout, featuring subtitles at the bottom of the screen and offering foreign language audio tracks alongside English subtitles.

\subsection{Attention-based Video Playback}
\rev{This technique builds on early work on attentive interfaces, which used gaze presence to automatically pause and resume video playback based on viewer attention~\cite{attentiveInterfaces}.} This intervention technique uses the user’s gaze position to determine whether their attention is on the screen. Video playback pauses immediately when the user’s gaze is no longer present on the screen and automatically resumes when the gaze returns. This enables the user to recover from distractions without missing a second of their video. \rev{While similar gaze-contingent playback mechanisms exist~\cite{storytellingVR, gazeNotetaking}, we apply this technique to subtitle-mediated comprehension, where missing brief dialogue can impair understanding.} This intervention method assumes that users can keep up with the displayed subtitles and allows their gaze to move freely between the subtitle region and the video content.

\subsection{Attention-based Dubbing}
This method also uses the user’s current gaze position to determine whether their attention is focused on the screen. When the user’s gaze is no longer detected on the screen, video playback will not pause; instead, it will seamlessly switch to the active language track that the user is familiar with (i.e. English). \rev{This approach builds on existing multi-language audio track switching, but differs in that the switch is triggered implicitly based on real-time gaze-detected attention rather than explicit user input.} Where a secondary audio track is not present, a text-to-speech audio dubbing is created using the process outlined below. This allows users to listen to the video content while completing their task, even if they are distracted.

\paragraph{Audio-dubbing Process}
\label{audio-dub-process}
An audio dubbing process was used for videos that lacked an English-language audio track. We developed a subtitle parser in Python to feed individual subtitle lines into a speech synthesis engine. Initially, we aimed to generate the English audio track while matching the speaker’s voice by re-implementing voice cloning techniques. Although the audio produced was impressive in replicating the speaker's voice for multilingual speech synthesis, the overall audio quality was poor due to background noise, and it failed to deliver consistent results. 

To address this issue, we used background noise suppression with Audacity. However, due to inconsistencies in the quality of the generated speech, we ultimately decided to use Amazon’s Polly text-to-speech engine. After synthesizing and saving the subtitles for each video individually, we compared the audio length to the start and end times of each subtitle line. We then adjusted the audio length, stretching or compressing it to match the subtitles without altering the pitch, using a phase vocoder. This ensured that the synthesized audio's speech rate aligned perfectly with the subtitles. 

The individual audio files were then programmatically combined based on their start and end times, with any gaps filled with silence. Special sound effects from the original audio track were manually transferred to the stitched audio track in Audacity. Finally, the synthesized audio track was added to the video file using VLC.

\begin{figure}[b]
    \centering
    \includegraphics[width=\onecolwidth]{figures/stacking-subtitles.jpg}
    \caption{Example of gaze-aware subtitle stacking. Subtitles appear at the bottom of the screen, displaying the previously spoken dialogue. The video pauses when three subtitles are stacked on top of each other.}
    \Description{A man with gray hair, wearing a dark blazer and light shirt, stands against a warm-toned background with circular light patterns. He appears to be speaking. Subtitles at the bottom are stacked, displaying previous dialogue.}
    \label{fig:stacking-subtitles}
\end{figure}

\begin{table*}[t]
\centering
 \caption{Video stimuli presented in user study}
  \label{tab:videos}
\begin{tabular}{lccc}
\hline
\multicolumn{1}{c}{\textbf{Video Title}} & \textbf{\begin{tabular}[c]{@{}c@{}}Primary \\ Language\end{tabular}} & \textbf{\begin{tabular}[c]{@{}c@{}}\rev{English} \\ \rev{Audio}\end{tabular}} & \textbf{\begin{tabular}[c]{@{}c@{}}Duration \\ (min)\end{tabular}} \\ \hline
How LIGO discovered gravitational waves & Spanish & \rev{Synthesized} & 8:37 \\
To understand autism, don't look away & Spanish & \rev{Synthesized} & 7:01 \\
Our moral imperative to act on climate change & Italian & \rev{Original} & 8:41 \\
Why journalists have an obligation to challenge power & Spanish & \rev{Synthesized} & 10:46 \\ \hline
\end{tabular}%
\end{table*}

\subsection{Subtitle Stacking}
Video speech rates significantly impact comprehension, with faster dialogue often resulting in decreased understanding. Viewers fluent in the video’s primary language tend to spend less time on subtitles~\cite{six-second-rule}, leaving those unfamiliar with the spoken language reliant on them for comprehension. Rapid speech can make it especially difficult for distracted viewers to keep up.

\rev{Subtitle stacking builds on conventional subtitle display systems that present captions sequentially at fixed times, extending them with persistence and accumulation to support recovery after missed content.} To assist users, subtitles stack on the screen if previous ones are missed or still being read, continuing to layer up to a maximum of three lines before the video automatically pauses (\autoref{fig:stacking-subtitles}). Instead of using default timing, subtitles remain visible until the system detects that the user has finished reading, as indicated by gaze at the subtitle area. A viewer is considered distracted if they are not looking at the subtitle area.

The reading time for each subtitle was calculated using an average words-per-minute (WPM) measure. \rev{Subtitle reading time was estimated using an average speed of $r = 280~\text{WPM}$, with fixations computed per subtitle line as $T_{\text{read}} = \tfrac{N}{r/60}$.} Each subtitle line was enclosed within a bounding box. Subtitles were removed \rev{once the viewer's gaze left the subtitle area and the cumulative fixation time reached $T_{\text{read}}$, where $N$ is the number of words. This threshold is conservative for fast readers or viewers who skip subtitles~\cite{eyeAgeProficiency}, allowing subtitles to be removed promptly for these viewers, while still giving slower readers sufficient time to read.}

User Study
To compare the effectiveness of the intervention techniques when viewers are distracted, we conducted a comparative user study. Participants were tasked with watching four different videos using the gaze-aware video player with each of the intervention methods mentioned above, as well as one baseline (standard video player). While gaze-tracking methods could be misused for non-consensual attention monitoring, our system is designed for voluntary, transparent interaction. All collected data are anonymized, locally processed, and used solely for research purposes, as approved by the ethics committee.


\subsection{Videos}

We selected four TED talk videos, listed in~\autoref{tab:videos}. All the videos feature a single speaker presenting a story or educational talk. All the selected videos have a foreign language primary audio track. Where a secondary audio track was not present, an audio-dub was created in English as described in~\autoref{audio-dub-process}. These videos were selected for their educational content, foreign language audio track, and minimal use of animations, which reduces the need to switch between visual content and subtitles, thereby minimizing cognitive load. This allows the viewer to focus on reading the subtitles without missing key information. 

% \begin{table}
%   \caption{Video stimuli presented in user study}
%   \label{tab:videos}
%   \begin{tabular}{ccccl}
%     \toprule
%     Video Title                                           & Primary Language & Secondary Language & Duration (min) & Average Characters per Second \\
%     \midrule
%     How LIGO discovered gravitational waves               & Spanish          & English            & 8:37           &                               \\
%     To understand autism, don't look away                 & Spanish          & English            & 7:01           &                               \\
%     Our moral imperative to act on climate change         & Italian          & English            & 8:41           &                               \\
%     Why journalists have an obligation to challenge power & Spanish          & English            & 10:46          &                               \\
%   \bottomrule
% \end{tabular}
% \end{table}

\subsection{Participants}
We recruited 24 participants through mass emails and targeted recruitment emails. Participants were from graduate and undergraduate levels with normal or corrected-to-normal vision. All participants were self-proclaimed fluent English speakers and were expected to have no difficulty with reading and writing, and none were fluent in Spanish or Italian. Of the 24 participants, 2 reported rarely using subtitles and 2 reported never using them when watching videos in a familiar language, while the remaining participants regularly used subtitles. All participants reported using their phones at least occasionally while watching videos, indicating that multitasking during video viewing was common. 17 participants self-reported having trouble keeping up with subtitles when watching videos. Sessions lasted approximately one hour, and all participants were compensated \$20 for their participation.

\subsection{Study Design}
The user study was conducted in person at our institution. The study followed a within-subjects design with one primary independent variable, \f{technique}, with four levels (\f{pausing}, \f{stacking}, \f{dubbing}, and \f{standard}). The \f{standard} video player used the same interface, but with all gaze-based features disabled. \rev{The order of \f{technique} was counterbalanced across participants, while the order of videos remained fixed.} \f{technique} was counterbalanced so that each participant encountered them in a different order, minimizing learning and order effects.
 
The primary measures taken included the gaze interaction logs, distractor quiz scores, and comprehension quiz scores. Additionally, questionnaires provided subjective measures. Questionnaires and distractor quizzes are included in the supplementary material.

\aptLtoX[graphic=no, type=html]{
    \begin{figure*}[t]
        \centering
        \includegraphics[width=\twocolwidth]{figures/system.png}
        \caption{System architecture including the mobile distractor quizzing component (left), the eye tracker listener (right), and the frontend video interface (middle).}
        \Description{A system architecture diagram showing three connected components. On the left, a smartphone labelled "Mobile Distractor Quiz", connected via WebSockets. In the middle, a monitor labelled "Frontend (Video Interface)" shows video and subtitle icons. On the right, an eyetracker labelled "Backend (Eye Tracker)" connects via a UDP server.}
        \label{fig:system-architecture}
    \end{figure*}
}{
    \begin{figure*}[t]
        \centering
        \includegraphics[width=\twocolwidth]{figures/system.pdf}
        \caption{System architecture including the mobile distractor quizzing component (left), the eye tracker listener (right), and the frontend video interface (middle).}
        \Description{A system architecture diagram showing three connected components. On the left, a smartphone labelled "Mobile Distractor Quiz", connected via WebSockets. In the middle, a monitor labelled "Frontend (Video Interface)" shows video and subtitle icons. On the right, an eyetracker labelled "Backend (Eye Tracker)" connects via a UDP server.}
        \label{fig:system-architecture}
    \end{figure*}
}

\subsection{Apparatus and Software}
The system comprises three main components: the frontend video player interface, the mobile quizzing interface, and the eye-tracker backend system. The three systems communicate through UDP and websockets (\autoref{fig:system-architecture}). The source code is available at <redacted for submission>.

\subsubsection{Hardware}
A Tobii 4C eye tracker with a sampling rate of 90Hz was set up on a desktop equipped with 16GB RAM and a 24-inch external monitor featuring a 16:9 aspect ratio and a native resolution of $1920 \times 1080$ pixels. The eye tracker was calibrated once for each participant at the beginning of each session. Participants were seated with their heads approximately 60cm from the display, allowing them to move naturally and comfortably while maintaining accurate tracking. This provided participants with a sense of comfort and a more natural viewing experience. 

\subsubsection{Video Player Interface}
The video player interface was developed in Electron to communicate with the eye-tracker. The video player layout is similar to a traditional video player with subtitles located at the bottom of the screen. Subtitle text was displayed in a white font colour on a semi-transparent (60\%) black background. All three intervention methods used a similar interface, with the baseline (standard video player) using the same interface but with all gaze tracking features disabled. Subtitle text formatting and placement were kept consistent.
%include figure

\subsubsection{Backend}
To communicate between the eye tracker and the video player interface, an application was developed using the Tobii SDK in C\#. This backend application is used to subscribe to the gaze point data stream from the eye tracker and transfers the on-screen gaze point data as $x$-$y$ pixel coordinates to the video player interface using UDP.


\subsection{Procedure}
\paragraph{Pre-Task} Participants were asked to complete a consent form and a pre-screening questionnaire. The pre-screening questions were used to ensure the participant was not familiar with the languages in the videos. Eye tracker calibration was performed for each participant before the user study began. The participant was then asked to connect to a mobile quizzing page on a provided mobile device and proceed to the first video.

\paragraph{Video Viewing} Each video was displayed using a standard video player or one of the three intervention methods. While watching the video stimuli, participants were routinely distracted by multiple-choice IQ questions~\cite{iq-questions} on the provided mobile device. Distractor questions were presented every 30 to 60 seconds. Questions were chosen to require the participants' attention but could be completed quickly. Participants were instructed to answer the distractor questions as soon as they became aware of them. A notification sound was played as soon as the question appeared and would continue to ring if the question was not answered after 20 seconds. Each participant answered a total of 7 distractor questions per video.  Immediately after completing the video, the participant was asked to complete a content comprehension quiz and evaluate the presented intervention method. This procedure was repeated until all three intervention methods had been tested, along with the baseline standard video player. 

\paragraph{Post-Study} Finally, a post-study questionnaire was presented, and participants were asked to rate the four methods (three intervention methods and the standard player) based on a 5-point Likert scale.

Results
We report findings on the performance of the distractor and comprehension quizzes, followed by the participant perceptions of each intervention technique. Statistical analyses were conducted using the Friedman test and ART ANOVA~\cite{ARTANOVA} due to normality violations, along with its post-hoc tests using the Holm-Bonferroni correction. We report 95\% confidence intervals, estimated through bootstrapping with 10,000 iterations. All quizzes and questionnaires can be found in the supplementary material.

\begin{figure*}[t]
    \centering
    \includegraphics[width=\linewidth]{figures/distractorResults.pdf}
    \caption{Plots representing the distractor quiz performance across each intervention method. Black lines represent a 95\% confidence interval. The plot suggests that \f{pausing} was the most effective method in mitigating distractions, resulting in the highest distractor scores. There was no significant difference in the mean time spent \rev{responding to the distractors}.}
    \Description{A scatter plot with four horizontal rows of colored dots, each representing an intervention condition: Pausing, Stacking, Dubbing, and Standard. The x-axis is labelled "Distractor Score" and ranges from 0\% to 100\%. The y-axis is labelled "Mean Distracted Time (s)" and ranges from 4 to 12 seconds.}
    \label{fig:distractorResults}
\end{figure*}

\subsection{Distractor Quiz Performance}
Participants were required to answer 7 multiple-choice IQ questions while watching the videos with each intervention technique. We measured their scores and the average time it took to answer the questions (\autoref{fig:distractorResults}). Analysis showed a significant main effect of \f{technique} on the score (\anova{3}{69}{32.60}{.001}{.59}). Post-hoc test revealed that \f{pausing} significantly performed the best (\mean{98\%}, \ci{97\%}{100\%}), followed by \f{standard} (\mean{85\%}, \ci{80\%}{90\%}), \f{dubbing} (\mean{77\%}, \ci{73\%}{81\%}), and \f{stacking} (\mean{71\%}, \ci{64\%}{78\%}). Further post-hoc test details can be found in~\autoref{tab:distractorStats}. These results suggest that adaptive pausing effectively supports comprehension by mitigating the impact of distraction, whereas techniques involving audio or subtitle manipulation increase cognitive load and reduce accuracy.

\rev{We also measure the time between when the question was sent and when participants finished responding.}\f{technique} did not significantly affect the time \rev{(\anovaex{3}{69}{2.63}{.057}{.10})}. Participants responded in similar durations, with average completion times of 5.9s (\ci{5.6s}{6.1s}) across all conditions. Overall, participants completed the quizzes in comparable durations across all conditions, suggesting that the interventions did not impose additional time costs.

\begin{figure}[t]
    \centering
    \includegraphics[width=\onecolwidth]{figures/contentComprehensionResults.pdf}
    \caption{Plot representing the comprehension scores across each intervention method. Black lines represent a 95\% confidence interval. The plot suggests no significant difference in the scores.}
    \Description{A vertical dot plot showing comprehension scores for four intervention methods. The x-axis is labelled "Comprehension Score" and ranges from 0\% to 100\%. The y-axis lists four conditions: Pausing, Stacking, Dubbing, and Standard.}
    \label{fig:comphrehensionResults}
\end{figure}


\subsection{Comprehension Scores}
Participants completed a comprehension test about each video after viewing it. We measured the scores for each participant (\autoref{fig:comphrehensionResults}). Analysis showed \f{technique} did not significantly affect the comprehension scores \rev{(\anovaex{3}{69}{1.05}{.38}{.04})}. Participants had an average score of 60\% (\ci{56\%}{64\%}) across the four quizzes. This suggests that while the interventions supported immediate task performance and attentional engagement during viewing, as reflected in the distractor quiz results, they did not lead to measurable differences in post-viewing comprehension. This suggests that their benefits may be limited to maintaining attention in real-time rather than enhancing long-term understanding.

\begin{figure}[t]
    \centering
    \includegraphics[width=\onecolwidth]{figures/gazeDistribution.pdf}
    \caption{\rev{Plot shows the overall gaze distribution across three contexts: \textit{Video}, \textit{Subtitle}, and \textit{Distracted}. The plot suggests viewers prioritize subtitles. Black lines represent a 95\% confidence interval.}}

    \Description{Plot shows gaze distribution (\%) on the x-axis, ranging from 0 to 100, with the y-axis listing Video, Subtitle, and Distracted regions. Most points cluster around subtitles, with fewer on video and minimal gaze on the distracted context.}
    \label{fig:gazeDistribution}
    
\end{figure}

\begin{figure*}[t]
    \centering
    \includegraphics[width=\twocolwidth]{figures/gazeBehavior.pdf}
    \caption{\rev{Plots illustrate gaze behaviour during distractions for each technique. Plots suggest  \f{pausing} effectively reduces the attentional demands of \f{standard} playback, followed by \f{stacking} and \f{dubbing}. Black lines represent a 95\% confidence interval.}}

    \Description{Three dot plots show gaze behaviour during distractions. The x-axes are labelled Mean Gaze Shifts, Shift Proportion (\%), and Mean On-Screen Time (s). The y-axis lists four conditions: Pausing, Stacking, Dubbing, and Standard. Across plots, pausing shows the lowest gaze shifts and on-screen time, followed by stacking and dubbing, while standard playback shows the highest values.}
    \label{fig:gazeBehaviour}
\end{figure*}

\begin{figure*}[t]
    \centering
    \includegraphics[width=\twocolwidth]{figures/stacking.pdf}
    \caption{\rev{Plots representing stacking behaviour with the \f{stacking} technique. Black lines represent a 95\% confidence interval. Stacking events occurred more frequently during video playback than during distraction periods, but pauses per minute remained low, suggesting that stacked subtitles generally fit within participants' natural reading speed and did not require pausing playback during distractions.}}

    \Description{A set of horizontal dot plots showing the stacking technique behaviour. The y-axis lists two contexts: During Video and Distraction. Three plots are shown side by side. The first plot has the x-axis labelled Duration to Resume (s), ranging from 0 to 15 seconds, showing shorter durations during video viewing and longer durations during distractions. The second plot has the x-axis labelled Number of Maximum Stacking Events, ranging from 0 to 15, with higher counts during video viewing than during distractions. The third plot has the x-axis labelled Pauses Per Minute, ranging from 0 to about 1.5, showing more frequent pauses during distractions.}
    \label{fig:stackingBehaviour}
\end{figure*}


\rev{
\subsection{Gaze Analysis}
We analyzed eye-tracking data to assess how well each technique managed attention by measuring visual allocation and disengagement during distractions. Further details on the statistical test are in~\autoref{app:statGazeTest}.

\paragraph{Gaze Distribution} To quantify visual attention allocation, we analyzed the proportion of gaze points directed toward three mutually exclusive areas of interest (AOIs): \textit{Subtitle}, \textit{Video}, and \textit{Distracted}. Analysis revealed a distinct preference for subtitles over visual content in foreign-language videos (\autoref{fig:gazeDistribution}). We found no significant main effect of \f{technique} on gaze allocation (\anovaex{3}{253}{0.58}{.628}{.22}), indicating that the techniques did not alter the participants' attentional strategies. However, as expected, there was a significant main effect of AOI (\anova{2}{253}{241.04}{.001}{.96}). Subtitles attracted the highest proportion of gaze (\mean{59.7\%}, \ci{56.0}{63.5}), followed by the video area (\mean{20.3\%}, \ci{18.4}{22.3}) and distracted (\mean{12.6\%}, \ci{10.3}{15.2}).

\paragraph{Gaze Shifts} We also quantified the frequency of \textit{gaze shifts}, defined as moments when participants looked away from and subsequently returned to the video, during distractor questions (\autoref{fig:gazeBehaviour}). Analysis revealed significant main effects of \f{technique} on both the frequency of gaze shifts (\anova{3}{69}{6.47}{.001}{.22}) and their likelihood (\anova{3}{69}{6.42}{.001}{.22}), measured as the proportion of distractor questions with gaze shifts. Post-hoc tests indicated that the \f{pausing} technique (\mean{5.4\%}, \ci{0.6\%}{11.9\%}) significantly minimized gaze shifts compared to both \f{standard} (\mean{27.6\%}, \ci{11.2\%}{31.6\%}; \p{.001}{<}) and \f{dubbing} (\mean{16.4\%}, \ci{8.5\%}{24.7\%}; \p{.01}{<}). A significant main effect of \f{technique}  (\anova{3}{69}{3.03}{.05}{.12}) on total on-screen duration during distractors was also observed. Participants spent significantly less time looking at the screen in the \f{pausing} condition (\mean{2.18s}, \ci{1.58s}{2.87s}) compared to \f{stacking} (\mean{3.38s}, \ci{2.30s}{4.60s}; \p{.05}{<}), though other differences were not significant. These findings suggest \f{pausing} was most effective in offloading visual attention. \f{stacking} and \f{dubbing} performed comparably as intermediate techniques, reducing visual demand relative to \f{standard}. In contrast, \f{standard} proved the most visually demanding, necessitating a persistent visual tether to the screen to avoid missing content.

\paragraph{Stacking Behaviour} We analyzed three metrics to understand \f{stacking} behaviour: time to clear subtitles when paused, the number of maximum stacking events, and the frequency of video pauses (\autoref{fig:stackingBehaviour}). Participants required significantly longer (\anova{1}{23}{7.33}{.05}{.24}) to clear accumulated subtitles during distraction (\mean{6.28s}, \ci{3.85s}{9.00s}) compared to video-viewing (\mean{0.45s}, \ci{0.13s}{0.90s}). Regarding saturation events, we observed an inverse relationship between count and rate. The system reached its maximum capacity significantly more often (\anova{1}{23}{24.09}{.001}{.51}) in terms of total count during the video viewing phase. However, the rate of these events was significantly lower (\anova{1}{23}{20.29}{.001}{.47}) compared to the distraction phase. This discrepancy is attributed to the significantly longer duration of the video viewing phase compared to the distraction periods. As expected, prolonged visual disengagement during distractor questions led to substantial subtitle accumulation, resulting in longer recovery times. In contrast, video viewing resulted in a higher total number of maximum events, but they were momentary, suggesting that the reading threshold frequently aligned with participants' natural reading speed.
}


\begin{figure*}[t]
    \centering
    \includegraphics[width=\twocolwidth]{figures/postTaskResults.pdf}
    \caption{Questionnaire responses for each intervention method on a 5-point Likert scale. Participants thought pausing and stacking were the most effective in mitigating distractions, followed by dubbing. Standard performed the worst, suggesting that gaze-aware interventions support attention recovery and a more seamless viewing experience.}
    \Description{A horizontal bar chart comparing four playback methods: Pausing, Stacking, Dubbing, and Standard. Each method is evaluated across seven criteria: Attention Recovery, Dialogue Processing, Distractedness, Ease of Use, Enjoyable, Non-Intrusiveness, and Adoption. Bars are segmented by five levels of agreement: Strongly Disagree (red), Disagree, Neutral, Agree, and Strongly Agree (green). Each segment includes a number indicating the number of respondents who selected that level.}
    \label{fig:postTaskResults}
\end{figure*}

\subsection{Subjective Assessment for Attention and Recovery}
Participants rated the effectiveness of the intervention techniques in supporting attention and recovery from distraction on a 5-point Likert scale (\autoref{fig:postTaskResults}). Further details on the statistical test can be found in \autoref{app:statTest}.


\paragraph{Attention Recovery} Participants rated how effectively each intervention technique helped them recover from distractions. The Friedman test indicated a significant effect of \f{technique} on perceived attention recovery (\friedman{3}{34.80}{.0001}). Post-hoc Wilcoxon tests showed that all three gaze-aware interventions were rated significantly higher than \f{standard} (\p{.001}{<}). \f{pausing} and \f{stacking} received the highest ratings (\median{4.0}). No significant difference was found between \f{pausing} and \f{stacking} \rev{(\p{.334, n.s.}{=})}, suggesting comparable perceived support for regaining focus. However, \f{dubbing} (\median{3.0}) was rated significantly lower than the other two intervention methods \rev{(\p{.05}{<})}.

\paragraph{Dialogue Processing} The extent to which participants felt able to keep up with the video’s dialogue. A significant main effect of \f{technique} was found (\friedman{3}{37.80}{.001}), where \f{pausing} (\median{4.5}), \f{stacking} (\median{4.0}), and \f{dubbing} (\median{3.5}) rated higher than \f{standard} (\median{2.0}). \f{pausing} and \f{stacking} were also rated significantly better than \f{dubbing} \rev{(\p{.05}{<})}, indicating that adaptive pausing and subtitle stacking were perceived as most helpful for maintaining comprehension.

\paragraph{Distractedness} Degree to which participants felt distracted from the video while answering distractor questions. A significant main effect of \f{technique} was found \rev{(\friedman{3}{13.82}{.05})}. Post-hoc tests showed that \f{stacking} (\median{4.0}) significantly reduced perceived distraction compared to the \f{standard} (\median{5.0}). No other pairwise comparisons reached significance \rev{(\p{.203, n.s.}{=})}. This suggests that stacking subtitles was perceived as the most effective intervention for reducing distraction, although the overall differences were moderate.

\paragraph{User Experience} Perceived enjoyment and how easy or difficult participants found the technique to use. Enjoyment ratings differed significantly across \f{technique} (\friedman{3}{25.91}{.001}). Both \f{pausing} and \f{stacking} were rated more enjoyable than \f{standard} (\median{5.0 \text{ vs. }2.5}). \f{pausing} was also rated significantly easier to use (\median{4.0}) compared to \f{standard} (\median{3.0}) (\friedman{3}{21.45}{.001}). These results suggest that adaptive interventions not only supported engagement but also maintained usability, contributing to a more positive overall viewing experience.

\paragraph{User Acceptance} Degree to which the technique was perceived as distracting, and willingness to use the technique if available. Perceived distraction (non-intrusiveness) showed a significant main effect (\friedman{3}{23.15}{.001}). \f{pausing} and \f{stacking} were perceived as less distracting than \f{standard} (\median{4.0 \text{ vs. } 2.0}). Finally, willingness to use (adoption) also differed significantly (\friedman{3}{29.77}{.001}). All three adaptive methods were preferred over \f{standard} (\median{4.0}, \rev{\p{.05}{<}}), with \f{pausing} and \f{stacking} (\median{4.0}) again leading. These findings indicate that gaze-adaptive methods, which minimize disruption to the viewing flow, are more likely to be accepted by users in real-world scenarios.

\paragraph{Summary}
Overall, participants consistently rated  \f{pausing} and \f{stacking} as providing stronger attentional support, higher enjoyment, and better usability than the \f{standard} player. \f{dubbing} was generally rated above \f{standard} but below the other intervention methods. These results suggest that adaptive pausing and stacked subtitles effectively supported attention recovery and sustained comprehension, aligning with participants' subjective perceptions of engagement and control.


\subsection{Attention Recovery and Viewing Experience}
We report three qualitative themes that capture how the techniques affected attention recovery, comprehension, and the overall viewing experience, as expressed in participants' comments \rev{from open-ended questions in post-task questionnaires.}

\paragraph{Supporting Focus and Reducing Missed Content}
A common theme was that the interventions helped participants stay aligned with the video and avoid missing content. Many appreciated that the techniques worked for them when their attention lapsed. Participants described pausing as \pquote{really helpful}{P8} and \pquote{the technique that helped me the most}{P16}, noting that \pquote{the video stopped when I wasn't looking, so that was great}{P7}. Others appreciated the reassurance that they were not missing key material (\pquote{I had the audio feedback that I didn’t miss anything from the video}{P11}).

Stacked subtitles similarly provided reassurance, allowing viewers to catch up after a distraction. Participants said it was \pquote{easy to catch up when looking back}{P4} and that keeping previous lines visible \pquote{ensured that I was reading all the information from the video}{P16}. This adaptation made it possible to reconstruct what was missed without having to rewind the video. Even with the dubbing technique, some noted that hearing an alternate-language track while distracted \pquote{helped me stay on track}{P20} and \pquote{made it possible for me to understand what she was saying}{P14}.

In contrast, the baseline underscored the importance of these adaptive features: without any intervention, participants reported feeling \pquote{confused}{P6}, \pquote{not really focused}{P14}, and that they \pquote{lost the flow every single time}{P21}. These responses underscore the role of gaze-awareness in providing participants with a sense of continuity and control during divided attention.

\paragraph{Responsiveness and Natural Flow} While participants appreciated interventions that quickly addressed distractions, they also noted some nuances that can disrupt the viewing experience. Some found gaze-triggered pauses too abrupt or overly sensitive (\pquote{It can be jarring when the video pauses when you aren't ``fully'' distracted}{P18}). Others desired a short buffer or replay window (\pquote{start playing from ten seconds before stop}{P5}) to create smoother transitions. This tension also appeared in the stacked subtitle condition, where participants experienced inconsistencies in timing and gaze detection. A few felt \pquote{the video took too long to pause}{P11}, while others said \pquote{the subtitles were too slow for my reading speed}{P23}.

With dubbing, participants pointed out that \pquote{switching from reading to listening was challenging}{P18}. Others commented that transitions felt \pquote{a bit off putting}{P16} or \pquote{slightly annoying instead of being helpful}{P2}. At the same time, some participants found the technique helpful, noting that \pquote{providing an audio recording in English when I was answering questions on the mobile phone helped me stay on track}{P20} and that the system was \pquote{really effective}{P7}. Across techniques, participants sought adaptive responses that felt seamless yet not disruptive to the viewing experience.

\paragraph{Cognitive Load and Attention Shifts}
The interventions also revealed how modality and task-switching affect cognitive effort. Participants described the pausing technique as \pquote{sorting out tasks very easily}{P21}, reducing the stress of multitasking by explicitly segmenting attention between video and phone. Stacked subtitles also reduced the stress, where one noted \pquote{occasionally when looking away, a single caption would be missed, but this provided the easiest way to keep up with the content}{P17}.

Dubbing, which required simultaneous listening and answering, drew the strongest reactions around mental load. Participants frequently reported that \pquote{[my] mind was trying to concentrate on two things}{P5} and that \pquote{changing voice and language was distracting}{P3}. The comments suggest that the challenge arises more from the effort required to switch between modalities. Gaze-aware systems may unintentionally increase cognitive demands when transitions between reading and listening are misaligned with users' natural processing strategies.

Discussion:
Our results show that gaze-adaptive playback can effectively support attention recovery during subtitle-based video viewing. The discussion interprets these findings in relation to real-time adaptation, modality, and individual viewing behaviour, highlighting how gaze-driven interventions shape immediate recovery, cognitive effort, and user experience. 

\textbf{Gaze-adaptive interventions support real-time recovery, not long-term comprehension.}
The study was intentionally conducted under controlled conditions to isolate the perceptual and attentional effects of gaze-triggered interventions before extending to in-the-wild viewing scenarios. The findings of this study demonstrate that gaze-adaptive interventions effectively help viewers recover from distractions that lead to immediate lapses in attention during subtitle reading. These gaze-adaptive interventions, such as adaptive pausing and persistent subtitles, reduce missed information by maintaining or reintroducing missed content when a distraction is detected. \rev{Our gaze shift analysis shows that the \f{pausing} technique reduced off-screen checks to 5.4\%, compared to 27.6\% in the \f{standard} condition. By decoupling playback from time, users could disengage during distractions without the cognitive burden of monitoring the video.} Recovering from distractions addresses the limitations of subtitles, as videos do not allow for selective re-reading like text does. Ultimately, this benefits viewers by offering an alternative to relying on explicit recovery strategies, such as scrubbing the timeline. While our gaze analysis captures attention dynamics during distractions, it does not directly characterize post-distraction recovery behaviour (\eg, re-fixation latency on subtitles or subtitle re-reading), which remains for future work.

The short-term benefits of real-time attention recovery do not translate into long-term comprehension benefits. The benefits of having access to recent information include supporting immediate task performance and reducing cognitive load, but they do not support the development of comprehension on their own. This is likely due to the nature of the stimuli used in our study, which consisted of narrative and informational TED-style talks rather than instructional materials that build cumulative understanding. As such, the interventions primarily helped viewers stay temporally synchronized with the content but did not reinforce conceptual learning or memory. This contrasts with findings from educational contexts, where gaze-aware interventions are structured to promote learning and deeper comprehension~\cite{eyeMindReader, gazeDrivenSummaries}.

\textbf{Modality changes support recovery only when matched to the viewer's preference.}
The adaptation methods emphasize how modality and cognitive load influence attention recovery. Prior work on bilingual audiovisual learning shows that audio presence, subtitle language, and language proficiency influence attentional allocation and lexical processing~\cite{eyeEarRelationship}. This suggests that abrupt modality shifts can overload working memory when viewers manage dual-language processing. Strategies that reduce the simultaneous mental processing of audio and visual, such as pausing the video to keep missed subtitles visible, often improve task performance and are less disruptive for viewers. \rev{However, the presentation format is important. While \f{stacking} maintained visual context, participants spent more time looking at the screen compared to the \f{pausing} condition. This indicates that a continuous video flow, even with subtitles, keeps users engaged, preventing the attentional offloading seen with strict pauses.} In contrast, approaches that shift modality quickly can require additional mental effort, particularly for non-fluent viewers who rely on subtitles to help them comprehend the content.

The results demonstrate that gaze adaptive recovery is effective, based on the timing of the system's intervention and the presentation of information to the viewer. To reduce cognitive load during recovery, adaptive playback systems should provide viewers with sufficient time to process missed material, rather than presenting denser information. Modality-based adaptations, such as switching modalities to audio, may support specific users. \rev{Our data on \f{dubbing} reflects this nuance: while it reduced gaze shifts relative to the \f{standard} condition, it did not eliminate checking behaviour entirely, suggesting that users still felt a need to visually verify context despite the auditory support.} The effectiveness relies on balancing sensory diversity and cognitive load.

\textbf{Attention-aware interventions must align with personal viewing behaviour.}
To achieve a seamless gaze-adaptive playback experience, the gaze-adaptive system must mitigate the tension between sensitivity and stability. If the system does not intervene to minimize disruptions at a smooth and predictable rate of change, the viewer will find it to be disruptive. Viewers prefer smooth, predictable, and minimally intrusive interventions. Intervention techniques, such as implementing buffered pause, gradual transitions, and replay windows, can maintain and flow through the video while allowing time for the individual to recover.

Personalization is also essential as individuals vary in their reading speeds, attention patterns, and viewing behaviours. Due to this variability, it is insufficient to establish fixed thresholds for gaze-related responses. \rev{The stacking analysis showed that the system sometimes reached maximum capacity during normal viewing rather than during distractions. This indicates a misalignment between fixed thresholds and natural reading speeds, leading to unnecessary disruptions in the viewing flow.} Lightweight calibration and adjustable features, such as pause perception and subtitle duration, give the system more flexibility in combination with the viewer's viewing behaviour. The effectiveness of the gaze-adaptive interface stems from a combination of accurate gaze detection and the system's conscious respect for the individual's level of attention.

\section{Limitations \& Future Work}
Several limitations restrict the generalizability of our results. \rev{First, the order of techniques was counterbalanced, but the videos were shown in a fixed sequence, which may leave residual content or ordinal effects.} Also, this study took place in a controlled environment using short, subtitled video-based interventions and a fixed-gaze-based attention model. Although this setup allowed comparisons of interventions, it may not fully reflect natural viewing contexts, where distraction types, durations, and frequencies vary. Future research should investigate how gaze-adaptive recovery translates to other contexts, such as extended video, mobile devices, or multitasking environments. 

Secondly, all interventions in this study were designed and tested for a single viewer. While this allowed us to systematically evaluate gaze-adaptive recovery in a controlled setting, it does not account for scenarios with multiple viewers. In multi-viewer situations, interventions could be extended in several ways. For example, while playback continues, stacked subtitles can be displayed, and once a limit is reached, a transition can occur to an AI-generated summary for viewers who have missed the content. Alternatively, personalized catch-up notifications could be sent to a phone, allowing each viewer to recover missed information without disrupting others’ viewing experience. Similarly, subtitles could be transferred directly to a mobile device, enabling viewers to follow along independently or asynchronously. Future work should explore how gaze-adaptive interventions can be scaled to multi-viewer contexts and mobile-assisted recovery while maintaining a seamless viewing experience.

Thirdly, our participant sample primarily consisted of viewers who were non-fluent in the video language (Spanish or Italian) but fluent in English. However, language proficiency, familiarity with subtitled content, and viewing behaviours all affect attention and recovery. Future work should consider more diverse participant samples and languages (subtitles and video) to determine how gaze-adaptive systems generalize across different linguistic contexts.

Lastly, while our interventions were effective in supporting short-term recovery, they were not intended to promote comprehension or retention over longer periods, given the nature of the video stimuli. Future studies should consider hybrid systems that combine real-time adaptation and educational support to facilitate immediate attention recovery in educational contexts.  \rev{Furthermore, the attention-based dubbing intervention used time-stretching synthesized speech to align with subtitle timings, which are often condensed or expanded compared to spoken dialogue. This could have led to slower or faster-than-normal speech rates, affecting users' perceptions of the dubbed audio.}

Conclusion:


Distractions often disrupt subtitle-based viewing, making it difficult for non-fluent viewers to recover. We explored three gaze-aware interventions to help viewers recover from distraction: adaptive pausing, stacked subtitles, and dubbing. A user study found adaptive pausing to be the most effective, as it improved task performance and reduced distractions. Stacked subtitles aided recovery but may slow fast readers, while dubbing provided limited support and increased cognitive load for some. All interventions outperformed standard playback during immediate recovery but did not enhance long-term comprehension. These results highlight the potential of gaze-adaptive methods and the importance of user engagement and preferences. This work lays the foundation for gaze-adaptive systems that seamlessly integrate attention recovery into everyday viewing experiences.

