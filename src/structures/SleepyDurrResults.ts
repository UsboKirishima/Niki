import {Guild} from "discord.js";
export interface SleepyDurrResults {
    image: {
        sfw: boolean,
        url: string
    }
}

export interface SleepyDurrConfig {
    SLEEPY_TOKEN?: string,
    SLEEPY_PREFIX?: string,
    OWNER_IDs?: string,
    MASTER_ID?: string
}