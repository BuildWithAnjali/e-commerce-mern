import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Label } from "../components/ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        

<Label className="font-bold">
  Address : <span className="font-normal">{addressInfo?.address}</span>
</Label>
<Label className="font-bold">
  City : <span className="font-normal">{addressInfo?.city}</span>
</Label>
<Label className="font-bold">
  Pincode : <span className="font-normal">{addressInfo?.pincode}</span>
</Label>
<Label className="font-bold">
  Phone : <span className="font-normal">{addressInfo?.phone}</span>
</Label>
<Label className="font-bold">
  Notes : <span className="font-normal">{addressInfo?.notes}</span>
</Label>

      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
