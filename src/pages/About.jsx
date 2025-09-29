import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import atash from "../assets/atash.jpg";
import sharifi from "../assets/sharifi.jpg";
import arezoomand from "../assets/arezoomand.jpg";
import emami from "../assets/emami.jpg";
import hooman from "../assets/hooman.jpg";
import mashreghi from "../assets/mashreghi.jpg";
import rastegari from "../assets/rastegari.jpg";


const teamMembers = [
  {
    name: "جناب آقای رضا آتش",
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
    name: "جناب آقای علی مشرفی آرائی",
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
    name: "جناب آقای هومن هشی",
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
    name: "جناب آقای محمد رضا آرزومند",
    role: "شریک",
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
    name: "جناب آقای احمد شریفی قزوینی",
    role: "شریک",
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
    name: "جناب آقای نادر رستگاری",
    role: "شریک",
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
    name: "جناب آقای رسول دوازده امامی",
    role: "شریک",
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
];

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
      <Container>
        {/* Title */}
        <Typography variant="h3" align="center" gutterBottom>
          درباره ما
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto", mb: 6 }}
        >
          مؤسسه حسابرسی بهمند با مجوز رسمی از جامعه حسابداران رسمی ایران، با هدف
          ارائه خدمات حرفه‌ای حسابرسی، مشاوره مالی و مالیاتی تأسیس شده است.
        </Typography>

        {/* Team Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            تیم ما
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", mb: 5 }}
          >
            تیم بهمند متشکل از حسابداران رسمی و کارشناسان خبره مالی است.
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  onClick={() => handleOpen(member)}
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "translateY(-6px)" },
                  }}
                >
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: 90,
                      height: 90,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "primary.main",
                    }}
                  />
                  <Typography variant="subtitle1" fontWeight={600}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Dialog for details */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {selectedMember?.name}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography
              component="pre"
              sx={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}
            >
              {selectedMember?.details}
            </Typography>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
