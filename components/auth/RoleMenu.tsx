import { ForwardedRef, forwardRef } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const RoleMenu = forwardRef((_, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <FormControl>
      <FormLabel htmlFor="role">Role</FormLabel>
      <Select className="ring-1 ring-primary-default" ref={ref} id="role">
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </Select>
    </FormControl>
  );
});

export default RoleMenu;
