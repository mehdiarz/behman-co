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
        name: "احمد شریفی",
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
        name: "نادر رستگاری",
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
        name: "رسول دوازده امامی",
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
    {
        name: "محمد رضارحمانیان",
        role: "شریک",
        avatar: emami,
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
        avatar: emami,
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
        avatar: emami,
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
    }

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
            spacing={3}
            justifyContent="center"
            sx={{ mb: 6 }}
        >
            {members.map((member, i) => (
                <Grid
                    key={i}
                    size={{ xs: 4, sm: 6, md: 3 }} // 📌 موبایل 3 تا، تبلت 2 تا، دسکتاپ 3 یا 4 تا
                    sx={{ display: "flex", mt: 2 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        style={{ flexGrow: 1, display: "flex" }}
                    >
                        <Card
                            onClick={() => handleOpen(member)}
                            sx={{
                                flexGrow: 1,
                                p: 3,
                                textAlign: "center",
                                borderRadius: 4,
                                cursor: "pointer",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",

                                // ✨ استایل مدرن
                                background: "rgba(255, 255, 255, 0.25)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                                transition: "all 0.35s ease",

                                "&:hover": {
                                    boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                                    transform: "translateY(-6px)",
                                    background:
                                        "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(245,245,245,0.15))",
                                },
                            }}
                        >
                            <Avatar
                                src={member.avatar}
                                alt={member.name}
                                sx={{
                                    width: { xs: 60, sm: 75, md: 90 }, // 📌 کوچیک‌تر روی موبایل
                                    height: { xs: 60, sm: 75, md: 90 },
                                    mb: 2,
                                    border: "3px solid rgba(255,255,255,0.6)",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                }}
                            />
                            <Typography
                                variant="subtitle1"
                                fontWeight={700}
                                sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
                            >
                                {member.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" } }}
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
            <Container>
                {/* Title */}
                <Typography variant="h3" align="center" gutterBottom>
                    درباره ما
                </Typography>

                {/* بخش معرفی موسسه */}
                <Typography align="center" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
                    مؤسسه حسابرسی بهمند در آذرماه سال ۱۳۵۸ توسط مرحوم اصغر هشی تأسیس و تحت شماره ۲۰۳۵ در اداره ثبت شرکتهای تهران به ثبت رسیده است...
                </Typography>

                {/* بخش ویژه مرحوم اصغر هشی */}
                <Box sx={{ textAlign: "center", my: 8 }}>
                    <Avatar
                        src={asghar}
                        alt="مرحوم اصغر هشی"
                        sx={{ width: 160, height: 160, mx: "auto", mb: 3 }}
                    />
                    <Typography variant="h5" gutterBottom>
                        مرحوم اصغر هشی
                    </Typography>
                    <Typography color="text.secondary" sx={{ maxWidth: 900, mx: "auto", textAlign: "justify", lineHeight: 2 }}>
                        مرحوم اصغر هشی در سال ۱۳۲۹ در اصفهان متولد شد. تحصیلات ابتدائی و متوسطه را در مدرسه مفید و دبیرستان سعدی اصفهان به اتمام رساند. تحصیلات دانشگاهی را از سال ۱۳۴۸ در دانشکده حسابداری شرکت نفت تهران ادامه داد و در سال ۱۳۵۳ موفق به اخذ درجه فوق لیسانس حسابداری گردید. از زمان دانشجویی در مؤسسه حسابرسی دقیق، زیر نظر استادانی چون آقای شاهرخ بهنام و مرحوم سجادی نژاد، مشغول به کار شد و تا سمت مدیریت و شراکت موسسه پیشرفت نمود.در سال ۱۳۵۸ با همکاری دیگر اساتید مؤسسه حسابرسی بهمند را تاسیس کرد و تا پایان عمر، مدیریت موسسه رابعهده داشت. مرحوم اصغر هشی یکی از اساتید حسابداری و حسابرسی کشور بود. وی از سال ۱۳۵۳ تدریس دروس حسابداری را در مدرسه عالی بازرگانی شروع و در دانشگاههای علامه، الزهرا، شهید بهشتی و دانشکده امور اقتصادی و دارائی ادامه داد. مرحوم اصغر هشی چه در دانشگاه و چه در مؤسسات دقیق و بهمند، نقش مؤثری در آموزش و تربیت نسلهای متعددی از دانشجویان حسابداری و حسابرسی کشور داشت. در این مدت، بعنوان بازرس و حسابرس، با صدها شرکت بزرگ و کوچک و مؤسسات عمومی و خصوصی همکاری نمود و در بهبود اداره مؤثر این شرکتها و مؤسسات نقش داشت. ایشان ا ز سال ۱۳۵۳ به بعد عضو انجمن حسابداران خبره ایران، کانون حسابداران رسمی، جامعه حسابداران رسمی ایران ، انجمن حسابداری ایران و کانون کارشناسان رسمی دادگستری بود و در امور مربوط به حرفه و تدوین قوانین مالیاتی نقش مؤثری ایفا نمود. وی از پیشگامان و پیشکسوتان حرفه حسابداری و حسابرسی کشور محسوب می شود.اصغر هشی در تمام عمر فردی مستقل و پایبند به اصول اخلاقی و حرفه ای بود و منافع عموم و اصول حرفه ای را همواره در صدر ملاحظات خویش قرار می داد و از این طریق به بالا بردن نقش مستقل حسابرس کمک نمود. شرکاء مؤسسه در حال حا ضر آقایان رضا آتش، علی مشرقی آرانی،هومن هشی، محمدرضا آرزومند صومعه سرائی ، احمدرضا شریفی قزوینی ، نادر رستگاری و رسول دوازده امامی و محمدرضا رحمانیان وسجاد دل پاک و علی رحمتی می‌باشند. مؤسسه حسابرسی بهمند ازجمله مؤسسات عضو جامعه حسابداران رسمی ایران، انجمن حسابداران خبره و انجمن حسابداری ایران و حسابرس معتمد سازمان بورس و اوراق بهادار می‌باشد.
                    </Typography>
                </Box>

                {/* بخش هیئت مدیره */}
                <Box sx={{ mt: 10 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        هیئت مدیره
                    </Typography>
                    <Typography align="center" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", mb: 5 }}>
                        شرکای مؤسسه در حال حاضر
                    </Typography>
                    <TeamRow members={firstRow} handleOpen={handleOpen} />
                    <TeamRow members={secondRow} handleOpen={handleOpen} />
                    <TeamRow members={thirdRow} handleOpen={handleOpen} />
                    {/* نمایش اعضا در چند ردیف */}
                    {/*<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" }, gap: 4 }}>*/}
                    {/*    {teamMembers.map((member, i) => (*/}
                    {/*        <motion.div*/}
                    {/*            key={i}*/}
                    {/*            whileHover={{ scale: 1.05 }}*/}
                    {/*            whileTap={{ scale: 0.97 }}*/}
                    {/*            initial={{ opacity: 0, y: 30 }}*/}
                    {/*            animate={{ opacity: 1, y: 0 }}*/}
                    {/*            transition={{ duration: 0.4, delay: i * 0.1 }}*/}
                    {/*        >*/}
                    {/*            <Card*/}
                    {/*                onClick={() => handleOpen(member)}*/}
                    {/*                sx={{*/}
                    {/*                    p: 3,*/}
                    {/*                    textAlign: "center",*/}
                    {/*                    borderRadius: 4,*/}
                    {/*                    cursor: "pointer",*/}
                    {/*                    boxShadow: 3,*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                <Avatar src={member.avatar} alt={member.name} sx={{ width: 90, height: 90, mx: "auto", mb: 2 }} />*/}
                    {/*                <Typography variant="subtitle1" fontWeight={600}>*/}
                    {/*                    {member.name}*/}
                    {/*                </Typography>*/}
                    {/*                <Typography variant="body2" color="text.secondary">*/}
                    {/*                    {member.role}*/}
                    {/*                </Typography>*/}
                    {/*            </Card>*/}
                    {/*        </motion.div>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}
                </Box>

                {/* Dialog جزئیات اعضا */}
                <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth sx={{ direction: "rtl" }}>
                    <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {selectedMember?.name}
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent sx={{ direction: "rtl", textAlign: "right" }}>
                        {selectedMember && (
                            <Stack spacing={2} alignItems="center">
                                <Avatar src={selectedMember.avatar} alt={selectedMember.name} sx={{ width: 120, height: 120 }} />
                                <Typography variant="subtitle1" color="text.secondary">
                                    {selectedMember.role}
                                </Typography>
                                <Typography component="pre" sx={{ whiteSpace: "pre-wrap", fontFamily: "inherit", width: "100%" }}>
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

