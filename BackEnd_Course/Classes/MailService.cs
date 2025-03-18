using MailKit.Net.Smtp;
using MimeKit;

public class MailService
{
    private readonly string _smtpServer;
    private readonly int _smtpPort;

    public MailService(IConfiguration config)
    {
        _smtpServer = config["MailSettings:SmtpServer"] ?? "localhost"; 
        _smtpPort = int.Parse(config["MailSettings:SmtpPort"] ?? "1025"); 
    }

    public void SendEmail(string toEmail, string subject, string body)
    {
        var message = new MimeMessage();
        
        message.From.Add(new MailboxAddress("Support", "support@divd.com")); 

        message.To.Add(new MailboxAddress("", toEmail));

        message.Subject = subject;
        message.Body = new TextPart("plain")
        {
            Text = body
        };

        using (var client = new SmtpClient())
        {
            client.Connect(_smtpServer, _smtpPort, false);

            client.Send(message);
            client.Disconnect(true);
        }
    }
}
