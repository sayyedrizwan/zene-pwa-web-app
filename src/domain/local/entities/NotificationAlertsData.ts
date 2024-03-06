export class NotificationAlertsData {
  title: string
  desc: string
  img: string

  constructor(title: string, desc: string, img: string) {
    this.img = img
    this.title = title
    this.desc = desc
  }
}
