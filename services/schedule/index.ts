import Api from "@/services/api";
import { AxiosResponse } from "axios";
import { AvailableScheduleDate, AvailableScheduleTime, Schedule } from "./types";

export type { AvailableScheduleDate, AvailableScheduleTime };

export const getAvailableDates = async (): Promise<AxiosResponse<AvailableScheduleDate>> => await Api.get("/scheduling/date");

export const getAvailableTime = async (date: string): Promise<AxiosResponse<AvailableScheduleTime>> => await Api.post('/scheduling/time', {
  date
});

export const createSchedule = async (data: any): Promise<AxiosResponse<Schedule>> => await Api.post('/scheduling/schedule',
  data
);
