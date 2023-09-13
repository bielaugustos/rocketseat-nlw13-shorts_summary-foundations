import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://youtube.com/shorts/" + videoId
  console.log("realizando o download do video: ", videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("a duração do video é maior que 60 segundos.")
      }
    })
    .on("end", () => {
      console.log("download do video finalizado.")
    })
    .on("error", (error) => {
      console.log(
        "não foi possivel fazer o download do video. detalhes do erro: ",
        error
      )
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
