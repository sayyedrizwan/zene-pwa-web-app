import { FaqData } from "../entities/FaqData";
import type { FaqRepositoryInterface } from "./FaqListInterface";

export class FaqListsRepository implements FaqRepositoryInterface {
    getAllFaqs(): FaqData[] {
        return [
            new FaqData('Can I sign up for free? What are the different subscription plans available?', ''),
            new FaqData('How do I import my music library from another platform?', ''),
            new FaqData('Can I listen to music offline?', ''),
            new FaqData('How much data does a song streaming use?', ''),
            new FaqData('What devices and platforms are supported by the app?', ''),
            new FaqData('How do I search for music and artists?', ''),
            new FaqData('How can I create and manage playlists? Can I share them with others?', ''),
            new FaqData('Can I add songs to my queue and skip past unwanted ones?', ''),
            new FaqData('Can I adjust the audio quality and equalizer settings?', ''),
            new FaqData('How do I change my subscription plan or payment method?', ''),
            new FaqData('I\'m having trouble streaming music. What could be the problem?', ''),
            new FaqData('How do I update the app to the latest version?', ''),
            new FaqData('Can I use the app on multiple devices at the same time?', ''),
            new FaqData('Where can I find more information and support?', ''),
            new FaqData('Does the app offer lyrics syncing or music videos?', ''),
            new FaqData('Can I follow friends and see their music activity?', ''),
            new FaqData('Does the app offer song challenges or social playlists with friends?', ''),
            new FaqData('Can I set the app to automatically download my favorite music for offline listening?', ''),
            new FaqData('Does the app offer sleep timers or playlists for relaxation?', ''),
            new FaqData('Can I control playback with voice commands?', ''),
            new FaqData('Does the app analyze my listening habits and recommend personalized music?', ''),
            new FaqData('How does the app collect and use my data?', ''),
            new FaqData('Can I control what data the app shares with third parties?', ''),
            new FaqData('How can I delete my account and data?', ''),
            new FaqData('Is the app compliant with privacy regulations like GDPR?', ''),
            new FaqData('Does the app support Chromecast or other streaming devices?', ''),
            new FaqData('Does the app support high-resolution audio quality?', ''),
            new FaqData('Does the app offer exclusive content or early access to new releases?', ''),
            new FaqData('What are the future plans for the app and its features?', ''),
            new FaqData('How can I provide feedback and suggestions for improvement?', ''),
        ]
    }

}