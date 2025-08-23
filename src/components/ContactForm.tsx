import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

// ==================== EMAILJS CONFIGURATION ====================
const EMAILJS_SERVICE_ID = "service_a69cmrl"; // Same service ID jo footer mein use kiya
const EMAILJS_TEMPLATE_ID = "template_ye25kyi"; // New template ID for contact form
const EMAILJS_PUBLIC_KEY = "tuMby3K1-jT62DW4C"; // Same public key

// ==================== SCHEMA ====================
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'),
  timestamp: z.number()
});

type FormValues = z.infer<typeof formSchema>;

// ==================== CUSTOM HOOK ====================
function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now());
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      honeypot: '',
      timestamp: formStartTime
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Bot detection
      if (data.honeypot) {
        toast({
          title: "Error",
          description: "There was a problem with your submission. Please try again.",
          variant: "destructive"
        });
        return;
      }

      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        toast({
          title: "Error",
          description: "Please take a moment to review your message before submitting.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Get current date and time
      const currentDate = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const { honeypot, timestamp, ...emailData } = data;

      const templateParams = {
        // Sender Information
        from_name: emailData.name,
        from_email: emailData.email,
        from_phone: emailData.phone || 'Not provided',

        // Message Details
        subject: emailData.subject,
        message: emailData.message,

        // Receiver Information
        to_name: 'BLI Team',
        to_email: 'amitmishra7427@gmail.com', // Your receiving email

        // Additional Info
        reply_to: emailData.email,
        date: currentDate,

        // Company Info
        company_name: 'BLI - Bansal Logistics of India',
        website: 'www.blirapid.com'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 2 hours.",
        variant: "default"
      });

      form.reset({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        honeypot: '',
        timestamp: Date.now()
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "❌ Error",
        description: "There was a problem sending your message. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, onSubmit, isSubmitting };
}

// ==================== FIELD COMPONENTS ====================
const NameField = ({ control }: any) => (
  <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#113C6A]">Full Name *</FormLabel>
        <div className="relative">
          <User className="absolute left-3 top-2.5 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Input
              placeholder="Enter your full name"
              className="pl-10 border-[#185EAA]/30 focus:border-[#FF7300] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

const EmailField = ({ control }: any) => (
  <FormField
    control={control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#113C6A]">Email Address *</FormLabel>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Input
              type="email"
              placeholder="your.email@example.com"
              className="pl-10 border-[#185EAA]/30 focus:border-[#FF7300] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

const PhoneField = ({ control }: any) => (
  <FormField
    control={control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#113C6A]">Phone Number (Optional)</FormLabel>
        <div className="relative">
          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Input
              type="tel"
              placeholder="+91 98765 43210"
              className="pl-10 border-[#185EAA]/30 focus:border-[#FF7300] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

const SubjectField = ({ control }: any) => (
  <FormField
    control={control}
    name="subject"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#113C6A]">Subject *</FormLabel>
        <FormControl>
          <Input
            placeholder="What is this regarding?"
            className="border-[#185EAA]/30 focus:border-[#FF7300] bg-[#F8FFFF]"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const MessageField = ({ control }: any) => (
  <FormField
    control={control}
    name="message"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#113C6A]">Message *</FormLabel>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#185EAA]" />
          <FormControl>
            <Textarea
              placeholder="Tell us about your logistics requirements..."
              className="min-h-[150px] pl-10 resize-none border-[#185EAA]/30 focus:border-[#FF7300] bg-[#F8FFFF]"
              {...field}
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

const HiddenFields = ({ control }: any) => (
  <>
    <FormField
      control={control}
      name="honeypot"
      render={({ field }) => (
        <FormItem className="hidden">
          <FormControl>
            <Input {...field} tabIndex={-1} />
          </FormControl>
        </FormItem>
      )}
    />
    <FormField
      control={control}
      name="timestamp"
      render={({ field }) => (
        <FormItem className="hidden">
          <FormControl>
            <Input type="hidden" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  </>
);

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-gradient-to-r from-[#FF7300] to-[#FF7729] hover:from-[#FF7729] hover:to-[#FF7300] text-white py-3 px-6 rounded-md transition-all flex items-center justify-center disabled:opacity-70 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
  >
    {isSubmitting ? (
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        Sending...
      </div>
    ) : (
      <>
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </>
    )}
  </button>
);

// ==================== CONTACT FORM SECTION ====================
const ContactFormSection = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <div className="bg-[#F8FFFF] rounded-xl shadow-xl p-8 border border-[#185EAA]/20 text-[#113C6A]">
      <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">Send Us a Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NameField control={form.control} />
            <EmailField control={form.control} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PhoneField control={form.control} />
            <SubjectField control={form.control} />
          </div>
          <MessageField control={form.control} />
          <HiddenFields control={form.control} />
          <div className="mt-1">
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </Form>
    </div>
  );
};

// ==================== CONTACT INFO SECTION ====================
const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      content: "+91-968 744 8434",
      subtext: "Mon-Sat, 9AM-6PM"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      content: "info@blirapid.com",
      subtext: "24/7 Support"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      content: "Vapi, Gujarat - 396191",
      subtext: "206, Arihant Complex, Nr. Vishal Mega Mart"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      content: "Within 2 Hours",
      subtext: "Quick Query Resolution"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="bg-[#F8FFFF] p-5 rounded-lg border border-[#185EAA]/20 hover:shadow-md transition-all hover:border-[#FF7300]/30">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-full flex items-center justify-center text-white">
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[#113C6A] mb-1">{info.title}</h4>
                <p className="text-[#185EAA] font-medium">{info.content}</p>
                <p className="text-sm text-[#113C6A]/60">{info.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const ContactForm = () => {
  return (
    <PageLayout>
      <section id="contact" className="bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7] relative py-[60px] mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-[#FF7300] to-[#FF7729] text-white rounded-full text-sm font-medium">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#113C6A]">Contact Us Today</h2>
            <p className="text-[#0a213a]/90 max-w-2xl mx-auto">
              Have questions about our logistics services? Let's connect and make delivery seamless for you!
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <ContactFormSection />
            <ContactInfoSection />
          </div>

          {/* Map Below Full Width */}
          <div className="rounded-lg overflow-hidden border border-[#185EAA]/20 shadow-md mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3431472084335!2d72.9245998!3d20.368736799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf2068f2de87%3A0x3ab36ccb6f06eb87!2sBansal%20Logistics%20of%20India!5e0!3m2!1sen!2sin!4v1755170562386!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default ContactForm;