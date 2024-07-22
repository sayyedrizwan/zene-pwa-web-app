export interface SearchUsersData {
    collection?: SearchUsersCollection[]
    total_results?: number
    facets?: Facet[]
    next_href?: string
    query_urn?: string
}

export interface SearchUsersCollection {
    avatar_url?: string
    city?: string
    comments_count?: number
    country_code?: string
    created_at?: string
    creator_subscriptions?: CreatorSubscription[]
    creator_subscription?: CreatorSubscription2
    description?: string
    followers_count?: number
    followings_count?: number
    first_name?: string
    full_name?: string
    groups_count?: number
    id?: number
    kind?: string
    last_modified?: string
    last_name?: string
    likes_count?: number
    playlist_likes_count?: number
    permalink?: string
    permalink_url?: string
    playlist_count?: number
    reposts_count?: any
    track_count?: number
    uri?: string
    urn?: string
    username?: string
    verified?: boolean
    visuals?: Visuals
    badges?: Badges
    station_urn?: string
    station_permalink?: string
}

interface CreatorSubscription {
    product?: Product
}

interface Product {
    id?: string
}

interface CreatorSubscription2 {
    product?: Product2
}

interface Product2 {
    id?: string
}

interface Visuals {
    urn?: string
    enabled?: boolean
    visuals?: Visual[]
    tracking?: any
}

interface Visual {
    urn?: string
    entry_time?: number
    visual_url?: string
}

interface Badges {
    pro?: boolean
    creator_mid_tier?: boolean
    pro_unlimited?: boolean
    verified?: boolean
}

interface Facet {
    name?: string
    facets?: Facet2[]
}

interface Facet2 {
    value?: string
    count?: number
    filter?: string
}
