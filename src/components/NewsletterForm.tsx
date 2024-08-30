import React, { useState } from "react";
import { Button, Box, OutlinedInput, IconButton } from "@mui/material";
import { NewsletterIcon, SocialIconFour, SocialIconOne, SocialIconThree, SocialIcontwo } from "@/utlis/svg";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="flex flex-col">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column" }}
      className="news-form md:max-w-[282px] "
    >
      <h4 className="uppercase font-HelveticaNeue leading-none tracking-wider mb-[20px] md:leading-tight md:tracking-[3px] text-base md:text-xl md:mb-[40px]">
        Newsletter & Blogs
      </h4>
      <p className="mb-[18px] font-HelveticaNeue">Subscribe our newsletter and get up to date about our updates</p>
      <div className="relative">
        <OutlinedInput
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.35)",
            },
            padding: "5px 40px 5px 5px",
          }}
          className="input-border !h-[45px] rounded-[90px] font-HelveticaNeue"
        />
 
        <Button
          type="submit"
          className="submitbutton !absolute right-[6px] top-[4px] p-0 min-w-max rounded-[20px]"
        > 
          <NewsletterIcon />
        </Button>
      </div>
    </Box>
    <Box className="custom-p-0 flex gap-[15px] p-0 mt-[20px] justify-center  md:justify-start md:mt-[40px]">
        <IconButton href="https://facebook.com" target="_blank" color="primary">
          <SocialIconOne />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="primary">
         <SocialIcontwo />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="primary">
          <SocialIconThree />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="primary">
        <SocialIconFour />
        </IconButton>
      </Box>
    </div>
  );
};

export default NewsletterForm;
