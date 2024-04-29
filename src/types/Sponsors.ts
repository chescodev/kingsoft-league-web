type SponsorId = 'senati'

type SponsorName = 'Senati'

export interface Sponsors {
  id: SponsorId
  name: SponsorName
  url: string
  image: {
    width: number
    height: number
  }
}
