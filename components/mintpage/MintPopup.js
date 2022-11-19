import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import item13 from "../../assets/items/item-13.png";
import React, { useState } from "react";

const price = 35;

const currencies = ["MATIC", "USDT", "USDC", "BUSD", "WETH", "BNB"];

const MintPage = ({ handleClose, open }) => {
  const [quantity, setQuantity] = useState(1);

  const [currency, setCurrency] = React.useState(currencies[0]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "350px",
          zIndex: "1001",
          paddingInline: "40px",
          paddingBlock: "35px",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          borderRadius: "0.375rem",
          position: "relative",
        }}
        className='radial-modal-bg'
      >
        <div
          style={{
            top: "5px",
            right: "5px",
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
          }}
        >
          <IconButton onClick={handleClose}>
            <AiOutlineClose style={{ color: "#fff" }} />
          </IconButton>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              textAlign: "center",
              width: "75%",
              lineHeight: "1.75rem",
            }}
          >
            COLLECT YOUR NFT BEFORE END
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className='w-1/2 rounded-md overflow-hidden'
            style={{
              width: "50%",
              borderRadius: "0.375rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={item13}
              alt='modal nft'
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div>
          <div className='remaining'>
            <p>Remaining</p>
            <p>
              <span>1000</span>/<span>5000</span>
            </p>
          </div>
          <div className='remaining'>
            <p>Price</p>
            <p>{price} USD</p>
          </div>
          <div className='quantity'>
            <p>Quantity</p>
            <div
              className='flex items-center'
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className='sub'
                onClick={() => {
                  setQuantity((prev) => {
                    if (prev > 1) {
                      return (prev -= 1);
                    } else {
                      return prev;
                    }
                  });
                }}
              >
                <span className='sign'>-</span>
              </div>
              <div
                className='border-r-2 py-3 px-3'
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                <span className='sign sign-num'>{quantity}</span>
              </div>
              <div
                className='add'
                onClick={() => {
                  setQuantity((prev) => {
                    if (prev < 5000) {
                      return (prev += 1);
                    } else {
                      return prev;
                    }
                  });
                }}
              >
                <span className='sign'>+</span>
              </div>
            </div>
            <p>{price * quantity} USD</p>
          </div>
          <div className='form-container'>
            <FormControl
              variant='filled'
              sx={{ m: 1, width: "100%", color: "white", marginTop: "1rem" }}
            >
              <InputLabel
                id='demo-simple-select-filled-label'
                sx={{ color: "white" }}
              >
                Currency
              </InputLabel>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                value={currency}
                onChange={handleChange}
                sx={{ color: "white" }}
              >
                {currencies.map((item) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <button className='mint-btn' style={{ backgroundColor: "#FD562A" }}>
            MINT NOW
          </button>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <span className='footer-txt'>Presale & Whitelist: Soldout</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

{
  /* <div className='button-container'>
            {" "}
            <WalletConnect setAddress={setAddress} />
          </div> */
}

export default MintPage;
