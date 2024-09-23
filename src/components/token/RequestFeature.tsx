import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import React from "react";

const RequestFeature = () => {
  return (
    <div className="px-4 bg-Celifi-Primary text-Celifi-Gray border-none w-full max-w-lg mx-auto mt-8">
      <div className="px-0">
        <h2 className="text-2xl md:text-3xl mb-4 text-center">Send Us A Feature Request</h2>
      </div>
      <form
        className="space-y-5"
        action="https://getform.io/f/bxojgyma"
        method="POST"
      >
        <Input
          placeholder="Email"
          type="email"
          name="email"
          className="bg-transparent border-[#476520] w-full p-2 rounded"
          required
        />
        <Textarea
          name="message"
          placeholder="Input message"
          className="bg-transparent border-[#476520] w-full h-60 p-2 rounded"
          required
        />
        <div>
          <Button className="w-full bg-[#476520] hover:bg-[#476520]/80 text-sm font-light rounded-2xl p-6">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestFeature;
