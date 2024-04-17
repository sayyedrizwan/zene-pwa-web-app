import { FaqData } from '../entities/FaqData'
import type { FaqRepositoryInterface } from './FaqListInterface'

export class FaqListsRepository implements FaqRepositoryInterface {
  getAllFaqs(): FaqData[] {
    return [
      new FaqData('Can I sign up for free? What are the different subscription plans available?', "User can streaming music, videos, lyrics, and more on Zene all without the hassle of mandatory signups or logins execpt when you start a group party. Also our vast library of content on the Zene Android, iOS, and Web apps are accessible without any subscription fees."),
      new FaqData('How do I import my music library from another platform?', "On the Zene app for Android and iOS, users can seamlessly import playlists from three major platforms: Spotify, YouTube Music, and Apple Music. For the Zene Web App, playlist importing is currently available exclusively from Spotify."),
      new FaqData('Can I listen to music offline?', 'Zene offers users the flexibility to download and stream music offline, data charges apply, with most songs on our platform ranging from 2.5 MB to 4.5 MB in size.'),
      new FaqData('How much data does a song streaming use?', 'A typical song streamed on Zene consumes approximately 3 MB of data. However, when streaming radio content, data usage can range from 10 KB to 20 KB per second.'),
      new FaqData('What devices and platforms are supported by the app?', 'Zene caters to a wide range of users by offering compatibility across various platforms, including Android, iOS, Windows, macOS, and Linux. You can easily find the Android app on the Play Store. Likewise, iOS and macOS users can get Zene through the App Store. For Linux and Windows users, the option to download the installation image directly from our website at https://zenemusic.co/download ensures a seamless local installation process.'),
      new FaqData('How do I search for music or artists?', "To search your favorite music or artists on Zene, simply click on the search icon located at the bottom of the app's home screen. Alternatively, on the web app, you can easily access the search feature by visiting https://zenemusic.co/search."),
      new FaqData('How can I create and manage playlists? Can I share them with others?', 'coming soon...'),
      new FaqData('Can I add songs to my queue and skip past unwanted ones?', 'coming soon...'),
      new FaqData('Can I adjust the audio quality and equalizer settings?', 'coming soon...'),
      new FaqData('How do I change my subscription plan or payment method?', 'coming soon...'),
      new FaqData("I'm having trouble streaming music. What could be the problem?", 'coming soon...'),
      new FaqData('How do I update the app to the latest version?', 'coming soon...'),
      new FaqData('Can I use the app on multiple devices at the same time?', 'coming soon...'),
      new FaqData('Where can I find more information and support?', 'coming soon...'),
      new FaqData('Does the app offer lyrics syncing or music videos?', 'coming soon...'),
      new FaqData('Can I follow friends and see their music activity?', 'coming soon...'),
      new FaqData('Does the app offer song challenges or social playlists with friends?', 'coming soon...'),
      new FaqData('Can I set the app to automatically download my favorite music for offline listening?', 'coming soon...'),
      new FaqData('Does the app offer sleep timers or playlists for relaxation?', 'coming soon...'),
      new FaqData('Can I control playback with voice commands?', 'coming soon...'),
      new FaqData('Does the app analyze my listening habits and recommend personalized music?', 'coming soon...'),
      new FaqData('How does the app collect and use my data?', 'coming soon...'),
      new FaqData('Can I control what data the app shares with third parties?', 'coming soon...'),
      new FaqData('How can I delete my account and data?', 'coming soon...'),
      new FaqData('Is the app compliant with privacy regulations like GDPR?', 'coming soon...'),
      new FaqData('Does the app support Chromecast or other streaming devices?', 'coming soon...'),
      new FaqData('Does the app support high-resolution audio quality?', 'coming soon...'),
      new FaqData('Does the app offer exclusive content or early access to new releases?', 'coming soon...'),
      new FaqData('What are the future plans for the app and its features?', 'coming soon...'),
      new FaqData('How can I provide feedback and suggestions for improvement?', 'coming soon...'),
    ]
  }
}
