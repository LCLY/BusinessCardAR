using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class triggerAnimation : MonoBehaviour
{
    public GameObject charObj;
    Animator charAnim;
    private float m_jumpTimeStamp = 0;
    private float m_minJumpInterval = 0.25f;
    private bool m_isGrounded;
    private bool m_wasGrounded;
    private bool jumpPressed;
    // Start is called before the first frame update
    void Start()
    {
       charAnim = charObj.GetComponent<Animator>();
       m_isGrounded = true;
       jumpPressed = false;
    }

    public void JumpAnim()
    {
        jumpPressed = true;
        m_isGrounded = false;
    }

    public void JumpingAndLanding()
    {       
        bool jumpCooldownOver = (Time.time - m_jumpTimeStamp) >= m_minJumpInterval;

        if (jumpCooldownOver && m_isGrounded && jumpPressed == true)
        {
            m_jumpTimeStamp = Time.time;
            jumpPressed = false; //reset jump bool
            m_isGrounded = false;
        }

        if (!m_wasGrounded && m_isGrounded)
        {
            charAnim.SetTrigger("Land");
            m_isGrounded = true;
        }

        if (!m_isGrounded && m_wasGrounded)
        {
            charAnim.SetTrigger("Jump");
            m_isGrounded = false;
        }
    }

    public void WaveAnim()
    {
        charAnim.SetTrigger("Wave");
    }

    public void PickUpAnim()
    {
        charAnim.SetTrigger("Pickup");
    }
    // Update is called once per frame
    void Update()
    {
        charAnim.SetBool("Grounded", m_isGrounded);       
        if(jumpPressed == true)
        {
            JumpingAndLanding();
        }

        m_wasGrounded = m_isGrounded;
    }
}
