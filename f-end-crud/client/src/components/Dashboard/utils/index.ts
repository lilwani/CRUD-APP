import type { AppDataType } from "../../Applications/appSlice";

const dashboardData = (allApps : AppDataType[])=>{
    const today = new Date()
  const lastWeek = new Date()
  lastWeek.setDate(today.getDate() -7)

  

  const recentApps = allApps.filter((item )=>{
    return new Date(item.appDate) > lastWeek
  }).length

  const activeApps = allApps.filter(item=>item.status === 'Reviewing').length

  const interviewApps = allApps.filter
}