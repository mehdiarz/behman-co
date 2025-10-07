import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

import Grid from "@mui/material/Grid";

import asghar from "../assets/asghar-hooshi.jpg"; // 👈 عکس مرحوم اصغر هشی
import atash from "../assets/atash.jpg";
import sharifi from "../assets/sharifi.jpg";
import arezoomand from "../assets/arezoomand.jpg";
import emami from "../assets/emami.jpg";
import hooman from "../assets/hooman.jpg";
import mashreghi from "../assets/mashreghi.jpg";
import rastegari from "../assets/rastegari.jpg";
import noAvatar from "../assets/noAvatar.png";

const teamMembers = [
  {
    name: "رضا آتش",
    role: "شریک و عضو هیات مدیره",
    avatar: atash,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از مدرسه عالی علوم اقتصادی و اجتماعی بابلسر درسال ۱۳۵۳

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی طوس (۱۰ ماه)
- حسابرسی در مؤسسه حسابرسی دقیق (۵ سال، سرپرست ارشد)
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۵۸ (شریک و عضو هیات مدیره)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "علی مشرقی",
    role: "شریک و عضو هیات مدیره",
    avatar: mashreghi,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از مدرسه عالی بازرگانی (۱۳۵۷)

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی دقیق (۳.۵ سال، سرپرست)
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۵۸ (شریک و عضو هیات مدیره)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "هومن هشی",
    role: "شریک و عضو هیات مدیره",
    avatar: hooman,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از دانشکده امور اقتصادی و دارائی (۱۳۷۸)
- فوق لیسانس حسابداری از دانشگاه شهید بهشتی (۱۳۸۱)

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۷۳ (شریک و عضو هیات مدیره)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
- عضو انجمن حسابداری ایران
- عضو انجمن حسابرسان داخلی ایران
- دانشجوی دوره ACCA
    `,
  },
  {
    name: "محمد رضا آرزومند",
    role: "شریک و عضو هیات مدیره",
    avatar: arezoomand,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از دانشگاه شهید بهشتی (۱۳۷۳)

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۷۰ (شریک)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "احمد شریفی",
    role: "شریک و عضو هیات مدیره",
    avatar: sharifi,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از دانشگاه آزاد اسلامی (۱۳۷۶)

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۷۸ (شریک)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
- عضو انجمن حسابداری ایران
- عضو انجمن حسابرسان داخلی ایران
    `,
  },
  {
    name: "نادر رستگاری",
    role: "شریک و عضو هیات مدیره",
    avatar: rastegari,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از دانشگاه شهید بهشتی (۱۳۷۳)

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۷۰ (شریک)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "رسول دوازده امامی",
    role: "شریک و عضو هیات مدیره",
    avatar: emami,
    details: `
🎓 مدارک تحصیلی:
- فوق لیسانس حسابداری از دانشگاه اشرفی اصفهانی (۱۳۹۷)

💼 سوابق کاری:
- حسابداری در بخش خصوصی (۲ سال)
- حسابرسی در مؤسسه حسابرسی بهمند از ۱۳۷۵ (شریک)

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "محمد رضارحمانیان",
    role: "شریک",
    avatar: noAvatar,
    details: `
🎓 مدارک تحصیلی:
- لیسانس حسابداری از دانشگاه آزاد اسلامی

💼 سوابق کاری:
- حسابرسی در مؤسسه حسابرسی بهمند به مدت ۲۴ سال

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "سجاد دل پاک",
    role: "شریک",
    avatar: noAvatar,
    details: `
🎓 مدارک تحصیلی:
- فوق لیسانس حسابداری از دانشگاه آزاد اسلامی

💼 سوابق کاری:
- حسابداری در موسسه حسابرسی دانشگر محاسب به مدت ۲ سال
- حسابرسی در مؤسسه حسابرسی بهمند به مدت ۱۶ سال

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
  {
    name: "علی رحمتی",
    role: "شریک",
    avatar: noAvatar,
    details: `
🎓 مدارک تحصیلی:
- فوق لیسانس حسابداری از دانشگاه آزاد اسلامی

💼 سوابق کاری:
- حسابداری در شرکت نوین کذار بهمدت ۳ سال
- حسابداری در موسسه مالی آتی حساب خبره به مدت ۱۲ سال
- حسابرسی در مؤسسه حسابرسی بهمند به مدت ۱۵ سال

👥 عضویت‌ها:
- حسابدار رسمی – عضو جامعه حسابداران رسمی ایران
- حسابدار مستقل – عضو انجمن حسابداران خبره ایران
    `,
  },
];

// 📌 تقسیم اعضا به گروه‌ها
const firstRow = teamMembers.slice(0, 3);
const secondRow = teamMembers.slice(3, 7);
const thirdRow = teamMembers.slice(7, 10);

// 📌 کامپوننت نمایش یک ردیف

function TeamRow({ members, handleOpen }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 4 }}
      justifyContent="center"
      sx={{
        mb: { xs: 4, md: 6 },
        px: { xs: 1, sm: 2, md: 4 },
      }}
    >
      {members.map((member, i) => (
        <Grid
          key={i}
          size={{
            xs: 6, // 📱 موبایل ۲ تایی
            sm: 4, // 📲 تبلت ۳ تایی
            md: 3, // 💻 دسکتاپ ۳–۴ تایی
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              onClick={() => handleOpen(member)}
              sx={{
                width: "100%",
                maxWidth: 260,
                minHeight: { xs: 180, sm: 220 },
                pl: { xs: 2, sm: 3 },
                pr: { xs: 2, sm: 3 },
                pt: { xs: 2, sm: 3 },
                borderRadius: 5,
                textAlign: "center",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                transition: "all 0.35s ease",
                overflow: "visible",

                // 🌫️ شیشه‌ای + Glow ملایم
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.25), 0 0 20px rgba(0,150,255,0.2)",

                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(240,240,240,0.15))",
                  transform: "translateY(-6px)",
                  boxShadow:
                    "0 8px 30px rgba(0,0,0,0.3), 0 0 35px rgba(0,170,255,0.35)",
                },
              }}
            >
              <Avatar
                src={member.avatar}
                alt={member.name}
                sx={{
                  width: { xs: 70, sm: 85, md: 95 },
                  height: { xs: 70, sm: 85, md: 95 },
                  mb: 2,
                  border: "3px solid rgba(255,255,255,0.6)",
                  boxShadow:
                    "0 0 12px rgba(0,150,255,0.3), 0 4px 15px rgba(0,0,0,0.25)",
                }}
              />
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },

                  textShadow: "0 0 6px rgba(0,0,0,0.3)",
                  mb: 0.5,
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.75rem", md: "0.9rem" },
                  mt: 1,
                  textShadow: "0 0 4px rgba(0,0,0,0.25)",
                }}
              >
                {member.role}
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default function About() {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, mt: 10, mb: 10 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: { xs: 6, md: 8 },
              color: "#111", // 🔥 رنگ مشکی ظریف و خوانا
              textShadow: "0 2px 4px rgba(0,0,0,0.2)", // سایه ظریف برای عمق
              letterSpacing: "0.5px",
            }}
          >
            درباره ما
          </Typography>
        </motion.div>

        {/* بخش معرفی موسسه */}
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            mb: 8,
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 5 },
            borderRadius: 5,
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.4)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.5s ease",
            "&:hover": {
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(240,240,240,0.5))",
              boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
            },
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-50%",
              width: "200%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
              transform: "translateX(-100%)",
              transition: "transform 0.8s ease",
            },
            "&:hover:before": {
              transform: "translateX(100%)", // ✨ افکت نور روی hover
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              lineHeight: 2,
              letterSpacing: "0.8px",
              background: "linear-gradient(90deg, #2e7d32, #81c784)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            مؤسسه حسابرسی بهمند در آذرماه سال ۱۳۵۸ توسط مرحوم اصغر هشی تأسیس و
            تحت شماره ۲۰۳۵ در اداره ثبت شرکتهای تهران به ثبت رسیده است.
          </Typography>
        </Box>

        {/* بخش ویژه مرحوم اصغر هشی */}
        <Box sx={{ textAlign: "center", my: 8, px: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                overflow: "hidden",
                p: 0, // 👈 حذف کامل padding تا هیچ فاصله‌ای نباشه
                display: "inline-block",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
                  background: "rgba(255,255,255,0.35)",
                },
              }}
            >

              <Box
                component="img"
                src={asghar}
                alt="مرحوم اصغر هشی"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto", // 👈 حفظ نسبت تصویر
                  maxWidth: { xs: 280, sm: 320, md: 380 },
                  borderRadius: 3,
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // 👈 افکت subtle روی خود عکس
                  },
                }}
              />
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom>
            مرحوم اصغر هشی
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 900,
              mx: "auto",
              textAlign: "justify",
              lineHeight: 2,
              fontSize: { xs: "0.9rem", md: "1rem" },
              mb: { xs: 6, md: 8 },
            }}
          >
            مرحوم اصغر هشی در سال ۱۳۲۹ در اصفهان متولد شد. تحصیلات ابتدائی و
            متوسطه را در مدرسه مفید و دبیرستان سعدی اصفهان به اتمام رساند.
            تحصیلات دانشگاهی را از سال ۱۳۴۸ در دانشکده حسابداری شرکت نفت تهران
            ادامه داد و در سال ۱۳۵۳ موفق به اخذ درجه فوق لیسانس حسابداری گردید.
            از زمان دانشجویی در مؤسسه حسابرسی دقیق، زیر نظر استادانی چون آقای
            شاهرخ بهنام و مرحوم سجادی نژاد، مشغول به کار شد و تا سمت مدیریت و
            شراکت موسسه پیشرفت نمود.در سال ۱۳۵۸ با همکاری دیگر اساتید مؤسسه
            حسابرسی بهمند را تاسیس کرد و تا پایان عمر، مدیریت موسسه رابعهده
            داشت. مرحوم اصغر هشی یکی از اساتید حسابداری و حسابرسی کشور بود. وی
            از سال ۱۳۵۳ تدریس دروس حسابداری را در مدرسه عالی بازرگانی شروع و در
            دانشگاههای علامه، الزهرا، شهید بهشتی و دانشکده امور اقتصادی و دارائی
            ادامه داد. مرحوم اصغر هشی چه در دانشگاه و چه در مؤسسات دقیق و بهمند،
            نقش مؤثری در آموزش و تربیت نسلهای متعددی از دانشجویان حسابداری و
            حسابرسی کشور داشت. در این مدت، بعنوان بازرس و حسابرس، با صدها شرکت
            بزرگ و کوچک و مؤسسات عمومی و خصوصی همکاری نمود و در بهبود اداره مؤثر
            این شرکتها و مؤسسات نقش داشت. ایشان ا ز سال ۱۳۵۳ به بعد عضو انجمن
            حسابداران خبره ایران، کانون حسابداران رسمی، جامعه حسابداران رسمی
            ایران ، انجمن حسابداری ایران و کانون کارشناسان رسمی دادگستری بود و
            در امور مربوط به حرفه و تدوین قوانین مالیاتی نقش مؤثری ایفا نمود. وی
            از پیشگامان و پیشکسوتان حرفه حسابداری و حسابرسی کشور محسوب می
            شود.اصغر هشی در تمام عمر فردی مستقل و پایبند به اصول اخلاقی و حرفه
            ای بود و منافع عموم و اصول حرفه ای را همواره در صدر ملاحظات خویش
            قرار می داد و از این طریق به بالا بردن نقش مستقل حسابرس کمک نمود.
          </Typography>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: { xs: 4, md: 6 },
              mt: { xs: 8, md: 15 },
              background: "linear-gradient(90deg, #1b5e20, #66bb6a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            شرکای مؤسسه در حال حاضر
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 900,
              mx: "auto",
              textAlign: "justify",
              lineHeight: 2,
              fontWeight: 700,
              fontSize: { xs: "0.9rem", md: "1rem" },
              mb: { xs: 6, md: 10 },
              px: { xs: 2, md: 0 },
            }}
          >
            شرکاء مؤسسه در حال حا ضر آقایان رضا آتش، علی مشرقی آرانی،هومن هشی،
            محمدرضا آرزومند صومعه سرائی ، احمدرضا شریفی قزوینی ، نادر رستگاری و
            رسول دوازده امامی ، محمدرضا رحمانیان ، سجاد دل پاک و علی رحمتی
            می‌باشند. مؤسسه حسابرسی بهمند ازجمله مؤسسات عضو جامعه حسابداران رسمی
            ایران، انجمن حسابداران خبره و انجمن حسابداری ایران و حسابرس معتمد
            سازمان بورس و اوراق بهادار می‌باشد.
          </Typography>
        </Box>

        {/* بخش هیئت مدیره */}
        <Box sx={{ mt: 10 }}>
          <TeamRow members={firstRow} handleOpen={handleOpen} />
          <TeamRow members={secondRow} handleOpen={handleOpen} />
          <TeamRow members={thirdRow} handleOpen={handleOpen} />
        </Box>

        {/* Dialog جزئیات اعضا */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          sx={{ direction: "rtl" }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {selectedMember?.name}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ direction: "rtl", textAlign: "right" }}>
            {selectedMember && (
              <Stack spacing={2} alignItems="center">
                <Avatar
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  sx={{ width: 120, height: 120 }}
                />
                <Typography variant="subtitle1" color="text.secondary">
                  {selectedMember.role}
                </Typography>
                <Typography
                  component="pre"
                  sx={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit",
                    width: "100%",
                  }}
                >
                  {selectedMember.details}
                </Typography>
              </Stack>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
